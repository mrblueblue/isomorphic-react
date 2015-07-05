'use strict'

export default function thunkify(func){
  return function(){
    let args = [].slice.call(arguments);
    return function(callback){
      args.push(callback);
      func.apply(this, args);
    }
  }
}
