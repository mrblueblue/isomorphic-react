import alt from '../alt';
import TweetActions from '../actions/TweetActions';

class TweetStore {
  constructor() {
    this.locations = ['San Francisco', 'Miami', 'Oakland'];
    this.tweets = [];
    this.errorMessage = null;
    this.bindListeners({
      handleAddLocation: TweetActions.ADD_LOCATION,
      handleUpdateTweets: TweetActions.UPDATE_TWEETS,
      handleFetchTweets: TweetActions.FETCH_TWEETS,
      handleTweetsFailed: TweetActions.TWEETS_FAILED
    });
  }

  handleAddLocation(location){
    this.locations.push(location);
  }

  handleUpdateTweets(tweets) {
    console.log(tweets);
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
