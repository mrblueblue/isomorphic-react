import React from 'react';
import TweetStore from '../../stores/TweetStore';

import SideBar from '../SideBar';
import { RouteHandler } from 'react-router';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = TweetStore.getState();
    this.state.selection = 0;
  }

  componentDidMount() {
    TweetStore.listen(() => this.setState(TweetStore.getState()));
  }

  componentWillUnmount() {
    TweetStore.unlisten(() => this.setState(TweetStore.getState()));
  }

  render(){
    let { tweets, locations, selection } = this.state;
    return (
      <div >
        <SideBar
          locations={locations}
          selection={selection}
          changeSelection={this.changeSelectionIndex.bind(this)}
        />
        <RouteHandler
          locations={locations}
          tweets={tweets}
          changeSelection={this.changeSelectionIndex.bind(this)}
        />
      </div>
    );
  }

  changeSelectionIndex(index){
    this.setState({selection: index});
  }

}
