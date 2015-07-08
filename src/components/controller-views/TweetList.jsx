import React from 'react';
import Tweet from '../Tweet';
import Header from '../Header';

export default class TweetList extends React.Component {
  render(){
    return (
      <div className='main-view'>
        <Header {...this.props}/>
        <div className="list-container">
          <div className="container">
          {this.props.tweets.map(this.renderTweet)}
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
