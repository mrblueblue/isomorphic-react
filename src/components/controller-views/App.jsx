import React from 'react';
import TweetStore from '../../stores/TweetStore';
import Tweet from '../Tweet';

import SideBar from '../SideBar';
import Header from '../Header';

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
    return (
      <div >
        <SideBar/>
        <div className='main-view'>
          <Header/>
          <div className="list-container">
            <div className="container">
            {this.state.tweets.map(this.renderTweet)}
            </div>
          </div>
        </div>
      </div>

    );
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
