import run from './run';
import formatTweets from './formatTweets';
import TwitterAPI from '../api/twitter';
import GoogleAPI from '../api/google';

export default function handleTweetRequest(req, res, next) {
  run(function*(){
    try {
      let location = yield GoogleAPI.getGeoCode(req.query.location);
      let geocode = { latitude: location[0].latitude, longitude: location[0].longitude };
      let tweets = yield TwitterAPI.findTweetsByGeoCode(geocode);
          tweets = formatTweets(tweets.statuses);
          
      if (!next) {
        res.send(tweets);
      } else {
        res.locals.data = { TweetStore: { tweets: tweets, locations: [req.query.location]} };
        next();
      }

    } catch(e) {
      console.log(e);
      res.sendStatus(404);
    }
  });
}

