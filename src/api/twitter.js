'use strict'

import Twitter from 'twitter';
import thunkify from  '../utils/thunkify';
import config from './config';

const client = new Twitter({
  consumer_key: config.TWITTER_CONSUMER_KEY,
  consumer_secret: config.TWITTER_CONSUMER_SECRET,
  access_token_key: config.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: config.TWITTER_ACCESS_TOKEN_SECRET
});

export default {

  findAllTweets: thunkify(
    client.get.bind(client, 'search/tweets', {
      geocode: '37.781157,-122.398720,1mi',
      count: 10,
      lang: 'en',
      result_type: 'recent'  
    })
  )

  

}