import React from 'react';
import TweetStore from '../../stores/TweetStore';
import Tweet from '../Tweet';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = TweetStore.getState();
  }

  componentDidMount() {
    TweetStore.listen(() => this.setState(TweetStore.getState()));
  }

  componentWillUnmount() {
    TweetStore.unlisten(() => this.setState(TweetStore.getState()));
  }

  render(){
    return (<div>{this.state.tweets.map(this.renderTweet)}</div>);
  }

  renderTweet(tweet){

    let props = {
      key: tweet.id,
      text: tweet.text,
      user: tweet.user.screen_name
    }

    return (
      <Tweet {...props} />);
  }
}
