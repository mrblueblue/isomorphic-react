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
    let { id } = tweet;
    return (
      <Tweet key={id} {...tweet} />);
  }
}
