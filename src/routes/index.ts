import express from 'express';
import images from './api/images';

const routes = express.Router();

routes
   .get('/', (req, res) => {
      res.send(
         'main api route:<br> To use the image Api add to the url /iamges'
      );
   })
   .all('/', (req, res) => {
      res.statusCode = 403;
      res.send('Method not implemented');
   });

routes.use('/images', images);

export default routes;
