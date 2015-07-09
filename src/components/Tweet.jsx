import React from 'react';

export default class Tweet extends React.Component {
  render(){
    return (
      <div className='tweet'>
        <img className='profile-pic' src={this.props.profile_pic} />
        <p className='screen-name'>{this.props.screen_name}</p>
        <p className='tweet-timestamp'>{this.props.timestamp}</p>
        <p className='tweet-content'>{this.props.body}</p>
      </div>
    );
  }
}

Tweet.propTypes = {
  screen_name: React.PropTypes.string.isRequired,
  body: React.PropTypes.string.isRequired,
  profile_pic: React.PropTypes.string.isRequired,
  timestamp: React.PropTypes.string.isRequired
}
