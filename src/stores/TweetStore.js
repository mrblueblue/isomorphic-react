import alt from '../alt';
import TweetActions from '../actions/TweetActions';

class TweetStore {
  constructor() {
    this.tweets = [];
    this.errorMessage = null;
    this.bindListeners({
      handleUpdateTweets: TweetActions.UPDATE_TWEETS,
      handleFetchTweets: TweetActions.FETCH_TWEETS,
      handleTweetsFailed: TweetActions.MESSAGES_FAILED
    });
  }

  handleUpdateTweets(tweets) {
    this.tweets = tweets;
    this.errorMessage = null;
  }

  handleFetchTweets() {
    this.tweets = [];
  }

  handleTweetsFailed(errorMessage) {
    this.errorMessage = errorMessage;
  }
}

export default alt.createStore(TweetStore, 'TweetStore');
