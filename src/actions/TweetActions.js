'use strict';

import alt from '../alt';
import WebAPI from '../api/web';

class TweetActions {

  updateTweets(tweets) {
    this.dispatch(tweets);
  }

  fetchTweets(location) {
    this.dispatch();
    WebAPI.getTweetsByLocation(location)     
  }

  tweetsFailed(errorMessage) {
    this.dispatch(errorMessage);
  }
}

export default alt.createActions(TweetActions);