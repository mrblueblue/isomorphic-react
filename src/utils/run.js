'use strict';

export default function run (generator){
  let gen = generator();
  next();

  function next(error, value){
    if (error) { return gen.throw(error); }
    let continuable = gen.next(value);
    if (continuable.done) { return null; }
    let callback = continuable.value;
    callback(next);
  }
}
