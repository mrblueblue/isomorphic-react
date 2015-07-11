import moment from 'moment';

export default function formatTweets(tweets){
  return tweets.map((tweet) => {
    let { screen_name, profile_image_url } = tweet.user;
    let { id, retweeted_status, text, retweet_count, created_at } = tweet;
    return {
      id: id,
      screen_name: screen_name,
      profile_pic: profile_image_url,
      timestamp: moment(new Date(created_at) ).fromNow(),
      body: !retweeted_status ? text : retweeted_status.text,
      retweets: retweet_count,
      tweet_url: `https://twitter.com/${screen_name}/status/${tweet.id_str}`,
      profile_url: `https://twitter.com/${screen_name}/`
     };
  });
}
