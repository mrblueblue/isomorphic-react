import React from 'react';
import TweetStore from '../../stores/TweetStore';

import SideBar from '../SideBar';
import { RouteHandler } from 'react-router';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = TweetStore.getState();
  }

  componentDidMount() {
    TweetStore.listen(() => this.setState(TweetStore.getState()));
  }

  componentWillUnmount() {
    TweetStore.unlisten(() => this.setState(TweetStore.getState()));
  }

  render(){
    let { tweets } = this.state


    return (
      <div >
        <SideBar/>
        <RouteHandler tweets={tweets} />
      </div>
    );
  }

}
