## isomorphic-react
An isomorphic React/Alt application that uses the Twitter API, React-Router, and ES6 Generators.

![alt tag](https://raw.github.com/mrblueblue/isomorphic-react/master/isomorphic-react-screenshot.png)

### Technology Stack
* *Client* - React and Alt (Flux)
* *Server* - Node/iojs/Express
* *Routing* - React-Router
* *Helpers* - Iso, node-geocoder
* *Build* - Webpack + Gulp
* *Dev* - Eslint, Babel
* *Templating* - Jade
* *Stlying* - Sass

### Overview

The application bootstraps server rendered React components onto the client. Making use of the React-Router as server middleware, each client-side route is also a server-route where this boostrapping occurs.

This boostrapping technique where code is mirrored on both the client and server is colloquially (although not accurately) refered to as [isomorphism](http://nerds.airbnb.com/isomorphic-javascript-future-web-apps/) (AKA ['Universal' JavaScript](https://medium.com/@mjackson/universal-javascript-4761051b7ae9)).

In this specific case, when a user navigates to a defined server-route, the server (1) grabs the appropriate data from Twitter; (2) 'hydrates' the Flux store; (3) renders the React component according to this data; (4) and sends an HTML string with all this in mind to the client.

### Running Locally

To run this project locally, you will need to set-up several dependencies.

First, register a Twitter application to use the Twitter API; then register a Google Maps application to use the Google Maps API. After getting the necessary API keys, you can create the necessary configuration file located in `/src/api/`. See the `example-config.js` for details.

Second, install `iojs`. Since this project uses ES6 features, you will need to run the server with `iojs`. For more information on installing `nvm` and `iojs`, refer to the [nvm repo](https://github.com/creationix/nvm).

To get the rest of the dependencies, simply run `npm install` in the project folder. If you don't have the Gulp CLI-tool, then install it running `npm install -g gulp`.

After you have all the dependencies you'll need to build the necessary js and css files. To do this, run the `gulp` command. `gulp` will build the necessary files and rebuild the files when necessary by watching for changes.

Finally, you are ready to run the servers: `nodemon server.js` (assuming you have ran `nvm use iojs` before!)


