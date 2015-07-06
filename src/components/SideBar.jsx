import React from 'react';

export default class SideBar extends React.Component {
  render(){
    return (
      <div className="sidebar">
        <LocationNav/>
      </div>
    );
  }
}

class LocationNav extends React.Component {
  render(){
    return (
      <nav>
        <ul className="location-nav">
          <a ><li><h2>LOCATIONS</h2></li></a>
          <a></a>
          <a ><li className="location-nav--selected">San Francisco</li></a>
          <a ><li>Miami</li></a>
          <a ><li>New York City</li></a>
          <a ><li>Minneapolis</li></a>
        </ul>
      </nav>
    );
  }
};