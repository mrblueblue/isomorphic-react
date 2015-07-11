import handleTweetRequest from '../utils/handleTweetRequest';
import worker from '../utils/worker';

export default (app) => {
  app.get('/', (req, res, next) => handleTweetRequest(req, res, next));
  app.get('/search', (req, res, next) => handleTweetRequest(req, res, next));
  app.get('/api/search', (req, res) => handleTweetRequest(req,res)); 
}
