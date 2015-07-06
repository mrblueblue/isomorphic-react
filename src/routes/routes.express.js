import TwitterAPI from '../api/twitter';
import run from '../utils/run';

export default (app) => {

  app.get('/', (req, res, next) => {
    run(function*(){
      try {
        console.log('home route loaded from express');
        let tweets = yield TwitterAPI.findAllTweets();
        res.locals.data = { TweetStore: { tweets: tweets.statuses } };
        next();

      } catch(e) {
        console.log(e);
        res.sendStatus(404);
      }
    });
  });

  app.get('/tweets', (req, res, next) => {
    run(function*(){
      try {
        console.log('home route loaded from express');
        let tweets = yield TwitterAPI.findAllTweets();
        res.locals.data = { TweetStore: { tweets: tweets.statuses } };
        next();

      } catch(e) {
        console.log(e);
        res.sendStatus(404);
      }
    });
  });

}