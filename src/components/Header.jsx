import React from 'react';

export default class Header extends React.Component {
  render(){
    return (
      <div className="list-header">
        <div className="container">
          <div className='row'>
            <h1 className="list-header__title col-md-12 col-sm-12">Isomorphic Javascript</h1>
            <p className="list-header__about col-sm-12">
              Isomorphic Javascript refers to an universal implementation of the language: code is shared between the client and server.
              In this case, React components pre-render Twitter data and are then served to the client.
            </p>
          </div>
          <div className="form-group">
            <form onSubmit={()=>{console.log('hello')}}>
            <label>To begin, search for tweets by entering a location: </label>
            <input className='location-input' type='text' />
            </form>
          </div>
        </div>
      </div>
    );
  }
};

