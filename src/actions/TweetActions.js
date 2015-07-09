'use strict';

import alt from '../alt';
import WebAPI from '../api/web';

class TweetActions {

  addLocation(location){
    this.dispatch(location);
  }

  updateTweets(tweets) {
    this.dispatch(tweets);
  }

  fetchTweets(location) {
    this.dispatch();
    WebAPI.getTweetsByLocation(location)
      .then((response) => response.json() )
      .then((json) => this.actions.updateTweets(json) );

  }

  tweetsFailed(errorMessage) {
    this.dispatch(errorMessage);
  }
}

export default alt.createActions(TweetActions);
