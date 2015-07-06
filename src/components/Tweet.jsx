import React from 'react';

export default class Tweet extends React.Component {
  render(){
    return (
      <div>
        <p>{this.props.user}</p>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

Tweet.propTypes = {
  user: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired
}
