'use strict'

const run = function(generator) {
  let gen = generator();
  next();

  function next(error, value){
    if (error) { return gen.throw(error); }
    let continuable = gen.next(value);
    if (continuable.done) { return; }
    let callback = continuable.value;
    callback(next);
  }
}

module.exports = run;