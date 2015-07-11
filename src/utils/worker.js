import fs from 'fs';
import path from 'path';
const filename = path.join(__dirname, '../../tmp/tweets.json');

export default {

  writeTweetToFile: function(tweet){
    fs.readFile(filename, {encoding: 'utf8'}, function (err, data) {
      if (err) throw err;

      let tweets = JSON.parse(data)
      tweets.push(tweet);

      fs.writeFile(filename, JSON.stringify(tweets), function (err) {
        if (err) return console.log(err);
        console.log('wrote to file');
      });

    });
  },

  readTweetsFromFile: function(callback){
    fs.readFile(filename, {encoding: 'utf8'}, function (err, data) {
      let tweets = JSON.parse(data);
      let len = tweets.length

      /* Get last fifty tweets */
      callback(tweets.slice(len - 50, len));
    });
  }

}