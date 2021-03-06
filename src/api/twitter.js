'use strict';

import Twitter from 'twitter';
import thunkify from '../utils/thunkify';
import config from './config';

const client = new Twitter({
  consumer_key: config.TWITTER_CONSUMER_KEY,
  consumer_secret: config.TWITTER_CONSUMER_SECRET,
  access_token_key: config.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: config.TWITTER_ACCESS_TOKEN_SECRET
});

export default {

  findTweetsByGeoCode: function(geocode){
    let { latitude, longitude } = geocode;
    return thunkify(
      client.get.bind(client, 'search/tweets', {
        geocode: `${latitude},${longitude},10mi`,
        count: 50,
        result_type: 'recent'
      })
    )();
  },

  stream: function(geocode, callback){
    let { latitude, longitude } = geocode;
    let params = {locations: `${latitude}, ${longitude}`}

    client.stream('statuses/filter', params, (stream) => {
      stream.on('data', callback);
     
      stream.on('error', (error) => {
        throw error;
      });
    });
  }
};
