import alt from '../alt';

class TweetStore {

  constructor() {
    this.tweets = [];
  }

}

export default alt.createStore(TweetStore, 'TweetStore');
