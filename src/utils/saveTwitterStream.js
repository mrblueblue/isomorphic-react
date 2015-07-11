import TwitterAPI from '../api/twitter';
import worker from './worker';
import formatTweets from './formatTweets';

export default function saveTwitterStream(){
  TwitterAPI.stream({latitude: '-122.75,36.8', longitude: '-121.75,37.8'}, (tweet) => {
    tweet = formatTweets([tweet])[0];
    worker.writeTweetToFile(tweet);
  });
}