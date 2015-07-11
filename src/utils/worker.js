/* TODO Promisify this */

import fs from 'fs';
import path from 'path';
const filename = path.join(__dirname, '../../tmp/tweets.json');

function readFilePromise(){
  return new Promise( (resolve, reject) => {
    fs.readFile(filename, {encoding: 'utf8'}, (err, data) => {
      if (err) return reject(err);
      let tweets = JSON.parse(data);
      resolve(tweets);
    })
  })
}

export default {
  writeTweetToFile: function(tweet){
    readFilePromise()
      .then((tweets) => {
        tweets.push(tweet);
        return tweets;
      })
      .then((tweets) => {
        fs.writeFile(filename, JSON.stringify(tweets), (err) => {
          if (err) return console.log(err);
          console.log('wrote to file');
        });
      });
  },

  readTweetsFromFile: function(){
    return readFilePromise()
      .then((tweets) => {
        tweets = tail(tweets);
        return tweets;
      })

    function tail(tweets){
      let len = tweets.length;
      return tweets.slice(len - 50, len);
    }
  }
}