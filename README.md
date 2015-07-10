## isomorphoc-react
An isomorphic React/Flux(Alt) application that uses the Twitter API, React-Router, Iso, and ES6 Generators.

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

