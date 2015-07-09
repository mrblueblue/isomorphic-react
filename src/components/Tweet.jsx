import React from 'react';

export default class Tweet extends React.Component {
  render(){
    return (
      <div className='tweet'>
        <div className='profile-pic'>
          <img src={this.props.profile_pic} />
        </div>
        <div className='tweet-body'>
          <p>{this.props.screen_name} @ {this.props.timestamp}</p>
          <p>{this.props.body}</p>
        </div>
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
