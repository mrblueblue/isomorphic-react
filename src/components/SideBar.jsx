import React from 'react';
import TweetActions from '../actions/TweetActions';

export default class SideBar extends React.Component {
  render(){
    return (
      <div className="sidebar">
        <LocationNav {...this.props} />
      </div>
    );
  }
}

class LocationNav extends React.Component {
  render(){
    return (
      <nav>
        <ul className="location-nav">
          <a><li><h4>LOCATIONS</h4></li></a>
          <a></a>
          {
            this.props.locations.map((location, index) => {
              return (
                <LocationItem 
                  key={index}
                  selection={index === this.props.selection ? true : false} 
                  index={index} 
                  location={location} 
                  handleClick={this.changeSelection.bind(this, index, location)}
                />
              );
            })
          }
        </ul>
      </nav>
    );
  }

  changeSelection(index, location){
    let { router } = this.context
    this.props.changeSelection(index);
    TweetActions.fetchTweets(location);
    router.transitionTo(`/search?location=${location}`);
  }
};

LocationNav.contextTypes = {
  router: React.PropTypes.func.isRequired
};

class LocationItem extends React.Component {
  render(){
    return (
      <a onClick={this.props.handleClick}>
        <li className={this.props.selection ? 'location-nav--selected' : ''}>
        {this.props.location}
        </li>
      </a>
    );
  }

}