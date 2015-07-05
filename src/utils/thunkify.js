'use strict'

const thunkify = function(func){
 
  return function(){

    let args = Array.prototype.slice.call(arguments);

    return function(callback){
      args.push(callback);
      func.apply(this, args);
    }
  }
}

module.exports = thunkify;