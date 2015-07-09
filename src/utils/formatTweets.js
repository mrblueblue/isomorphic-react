import moment from 'moment';

export default function formatTweets(tweets){
	return tweets.statuses.map((tweet) => {
	   return {
	     id: tweet.id,
	     screen_name: tweet.user.screen_name,
	     profile_pic: tweet.user.profile_image_url,
	     timestamp: moment(new Date(tweet.created_at) ).fromNow(),
	     body: !tweet.retweeted_status ? tweet.text : tweet.retweeted_status.text, 
	     retweets: tweet.retweet_count
	   };
	});
}