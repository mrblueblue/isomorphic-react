import React from 'react';
import TweetActions from '../actions/TweetActions';

export default class Header extends React.Component {
  render(){
    return (
      <div className="list-header">
        <div className="container">
          <Headline />
          <LocationInput {...this.props}/>
        </div>
      </div>
    );
  }
}

class Headline extends React.Component {
  render(){
    return (
      <div className='row'>
        <h1 className="list-header__title col-md-12 col-sm-12">
          Isomorphic Javascript
        </h1>
        <p className="list-header__about col-sm-12">
          Isomorphic Javascript refers to an universal implementation of the
          language: code is shared between the client and server. In this case,
          React components pre-render Twitter data and are then served to the client.
        </p>
      </div>
    );
  }
}

class LocationInput extends React.Component {
  constructor(){
    super();
    this.state = {input: ''};
  }

  render(){
    let input = this.state.input;
    return (
      <div className="form-group">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>
            To begin, search for tweets by entering a location:
          </label>
          <input
            className='location-input'
            type='text' value={input}
            onChange={this.handleChange.bind(this)}
          />
        </form>
      </div>
    );
  }

  handleSubmit(event){
    event.preventDefault();

    let location = this.state.input;
    let { changeSelection } = this.props;
    let { router } = this.context;

    this.setState({input: ''});

    TweetActions.fetchTweets(location);
    TweetActions.addLocation(location);

    changeSelection(this.props.locations.length - 1);
    router.transitionTo(`/search?location=${location}`);
  }

  handleChange(event){
    this.setState({input: event.target.value});
  }
}

LocationInput.contextTypes = {
  router: React.PropTypes.func.isRequired
};

