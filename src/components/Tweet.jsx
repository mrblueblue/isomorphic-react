import React from 'react';

export default class Tweet extends React.Component {
  render(){
    let {
      profile_url,
      profile_pic,
      screen_name,
      timestamp,
      body
    } = this.props;

    return (
      <div className='tweet' onClick={this.handleClick.bind(this)}>
        <div className='profile-pic'>
          <a href={profile_url} >
            <img src={profile_pic} />
          </a>
        </div>
        <div className='tweet-body'>
          <p><a href={profile_url} >{screen_name}</a> @ {timestamp}</p>
          <p>{body}</p>
        </div>
      </div>
    );
  }

  handleClick(){
    window.location.href = this.props.tweet_url;
  }
}

Tweet.propTypes = {
  screen_name: React.PropTypes.string.isRequired,
  body: React.PropTypes.string.isRequired,
  profile_pic: React.PropTypes.string.isRequired,
  timestamp: React.PropTypes.string.isRequired,
  tweet_url: React.PropTypes.string.isRequired,
  profile_url: React.PropTypes.string.isRequired
};
