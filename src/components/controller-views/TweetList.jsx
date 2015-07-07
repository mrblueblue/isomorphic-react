import React from 'react';
import Tweet from '../Tweet';
import Header from '../Header';

export default class TweetList extends React.Component {
  render(){
    console.log(this.props.query, 'props');
    console.log(this.props.params, 'props');
    console.log(this.context, 'context');
    return (
      <div className='main-view'>
        <Header/>
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
