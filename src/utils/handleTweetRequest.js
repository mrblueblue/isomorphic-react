import run from './run';
import worker from './worker';
import formatTweets from './formatTweets';
import TwitterAPI from '../api/twitter';
import GoogleAPI from '../api/google';

/* */

export default function handleTweetRequest(req, res, next) {
  let store = { TweetStore: {} };
  
  if ( req.route.path === '/' ) {
    return worker.readTweetsFromFile()
      .then((tweets)=> {
        store.TweetStore.tweets = tweets;
        store.TweetStore.locations = ['San Francisco'];
        res.locals.data = store
        next();
      });
  }

  run(function*(){
    try {
      let location = yield GoogleAPI.getGeoCode(req.query.location);
      let { latitude, longitude } = location[0];
      let geocode = { latitude: latitude, longitude: longitude };
      let tweets = yield TwitterAPI.findTweetsByGeoCode(geocode);
          tweets = formatTweets(tweets.statuses);

      if (!next) {
        res.send(tweets);

      } else {
        store.TweetStore.tweets = tweets;
        store.TweetStore.locations = [req.query.location];
        res.locals.data = store
        next();
      }

    } catch(e) {
      console.log(e);
      res.sendStatus(404);
    }
  });
}

