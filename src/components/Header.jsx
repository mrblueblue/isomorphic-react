import React from 'react';

export default class Header extends React.Component {
  render(){
    return (
      <div className="list-header">
        <div className="container">

          <div className='row'>
            <h1 className="list-header__title col-md-12 col-sm-12">Isomorphic Twitter</h1>
            <p className="list-header__about col-sm-12">
              Isomorphic Javascript refers to the language's universality: code is shared between the client and server.
              This technique allows one to pre-render HTML on the server and improves user experience.
            </p>
          </div>
          <div className="form-group">
            <form onSubmit={()=>{console.log('hello')}}>
            <label>I want to search for tweets from: </label>
            <input className='location-input' type='text' />
            </form>
          </div>

        

        </div>
      </div>
    );
  }
};

