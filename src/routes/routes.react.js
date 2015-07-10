import React from 'react';
import { Route, DefaultRoute } from 'react-router';

import App from '../components/controller-views/App';
import TweetList from '../components/controller-views/TweetList';

const routes = (
  <Route path='/' handler={App}>
    <DefaultRoute handler={TweetList}/>
    <Route path='search' handler={TweetList}/>
  </Route>
);

export default routes;
