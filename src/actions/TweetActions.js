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
      .then((tweets)=>{
        this.actions.updateTweets(tweets); })
      .catch((e)=>{
        console.log('Response Error', e);
        this.actions.tweetsFailed(e);
      });
  }

  tweetsFailed(errorMessage) {
    this.dispatch(errorMessage);
  }
}

export default alt.createActions(TweetActions);