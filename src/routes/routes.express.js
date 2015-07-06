import TwitterAPI from '../api/twitter';
import GoogleAPI from '../api/google';
import run from '../utils/run';

export default (app) => {

  app.get('/', (req, res, next) => {
    next();
  });

  app.get('/search', (req, res, next) => {

    run(function*(){
      try {
        console.log('home route loaded from express', req.query);
        let location = yield GoogleAPI.getGeoCode(req.query.location.substring(0,50));
        let geocode = {
          latitude: location[0].latitude,
          longitude: location[0].longitude
        };

        let tweets = yield TwitterAPI.findTweetsByGeoCode(geocode);
        console.log(tweets)
        res.locals.data = { TweetStore: { tweets: tweets.statuses } };
        next();

      } catch(e) {
        console.log(e);
        res.sendStatus(404);
      }
    });
  });

}