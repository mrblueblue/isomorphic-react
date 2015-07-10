## isomorphic-react
An isomorphic React/Alt application that uses the Twitter API, React-Router, and ES6 Generators.

![alt tag](https://raw.github.com/mrblueblue/isomorphic-react/master/isomorphic-react-screenshot.png)

## Technology Stack
* *Client* - React and Alt (Flux)
* *Server* - Node/iojs/Express
* *Routing* - React-Router
* *Helpers* - Iso, node-geocoder
* *Build* - Webpack + Gulp
* *Dev* - Eslint, Babel
* *Templating* - Jade
* *Stlying* - Sass

## Overview

The application bootstraps server rendered React components onto the client. Making use of the React-Router as server middleware, each client-side route is also a server-route where boostrapping occurs.

This boostrapping technique where code is mirrored on both the client and server is colloquially (although not accurately) refered to as [isomorphism](http://nerds.airbnb.com/isomorphic-javascript-future-web-apps/) (AKA ['Universal' JavaScript](https://medium.com/@mjackson/universal-javascript-4761051b7ae9)).

In this specific case, when a user navigates to a defined server-route, the server

1. grabs the appropriate data from Twitter,
2. 'hydrates' the Flux store,
3. renders the React component according to this data,
4. and lastly, sends an HTML string with all this in mind to the client.

## Running Locally

#### Dependencies
To run this project locally, you will need to first set-up several dependencies.

1. Create a `config.js` file in `src/api`. 

    * Use the API keys from [registering a Twitter application](https://apps.twitter.com/) and [registering a Google Maps application](https://developers.google.com/maps/documentation/javascript/tutorial).

    * See the `example-config.js` for details.

2. Install `iojs`. You will need `nvm` first.


        git clone https://github.com/creationix/nvm.git ~/.nvm && cd ~/.nvm && git checkout `git describe --abbrev=0 --tags`
    
    Source it to activate nvm:
    
        . ~/.nvm/nvm.sh
        
    Then you can install and use iojs:
    
        nvm install iojs
        nvm use iojs
  

3. To get the rest of the dependencies:

        npm install
        npm install -g gulp

#### Building

To build the necessary files, run:

    gulp
    
or
  
    gulp build

#### Running

    nodemon server.js
    
Go to `127.0.0.1:8080` to see the application in action.

## Structure

```bash
$ tree src

├── app.js                     # Express server
├── server.js                  # Server entry point file
├── public/                    # Static files to be served
├── src/                       # Application source
│   ├── routes/                # Application routes
│   │   ├── routes.express.js  # Server routes
│   │   └── routes.react.js    # Client routes
│   ├── apis/                  # APIs used by application
│   │   ├── config.js          # API keys and auth
│   │   ├── google.js          # Google API functions
│   │   ├── twitter.js         # Twitter API functions
│   │   └── web.js             # Server API functions
│   ├── actions/               # Flux actions
│   │   └── TweetActions.js    # Actions for dispatched to the Tweet Store
│   ├── stores/                # Flux stores
│   │   └── TweetStore.js      # Store for Tweet data
│   ├── components/            # React components folder
│   │   ├── ...
│   │   └── controller-views/  # Route handlers (high-order components or 'views')
│   │   │   └── ...
│   ├── utils/                 # Utility funcitons
│   │   ├── formatTweets.js    # Function that transforms tweet collection
│   │   ├── run.js             # Function that runs generators with async thunks
│   │   └── thunkify.js        # Function that turns node function into a thunk
│   ├── styles/                # Sass styles folder
│   │   └── ... 
│   ├── alt.js                 # Flux / Alt instance
│   └── client.js              # Main React application file
└── templates/                 # Jade templates for rendering
```
