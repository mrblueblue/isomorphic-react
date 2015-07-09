import TwitterAPI from '../api/twitter';
import GoogleAPI from '../api/google';
import run from '../utils/run';
import formatTweets from '../utils/formatTweets';

export default (app) => {

  app.get('/', (req, res, next) => {
    next();
  });

  app.get('/search', (req, res, next) => {
    run(function*(){
      try {
        let location = yield GoogleAPI.getGeoCode(req.query.location.substring(0, 50));
        let geocode = { latitude: location[0].latitude, longitude: location[0].longitude };
        let tweets = formatTweets( yield TwitterAPI.findTweetsByGeoCode(geocode) );

        res.locals.data = { TweetStore: { tweets: tweets, locations: [req.query.location]} };
        next();

      } catch(e) {
        console.log(e);
        res.sendStatus(404);
      }
    });
  });

  app.get('/api/search', (req, res) => {
    run(function*(){
      try {
        let location = yield GoogleAPI.getGeoCode(req.query.location.substring(0, 50));
        let geocode = { latitude: location[0].latitude, longitude: location[0].longitude };
        let tweets = formatTweets( yield TwitterAPI.findTweetsByGeoCode(geocode) );

        res.send(tweets);

      } catch(e) {
        console.log(e);
        res.sendStatus(404);
      }
    });
  });

};
