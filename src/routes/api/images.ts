import express, { Router } from 'express';
import resizeImage from '../../utils/ImageProcessing';

const images: Router = express.Router();

images
   .get('/', async (req, res): Promise<void> => {
      try {
         if (
            'imagename' in req.query &&
            'width' in req.query &&
            'height' in req.query
         ) {
            const x: string = await resizeImage(
               req.query.imagename as string,
               parseInt(req.query.width as string),
               parseInt(req.query.height as string)
            );
            res.statusCode = 200;
            res.sendFile(x);
         } else {
            res.statusCode = 400;
            res.send('<h1>missing params imagename, width or height</h1>');
         }
      } catch (error) {
         //console.log(error);
         res.statusCode = 400;
         res.send((error as Error).message);
      }
   })
   .all('/', (req, res) => {
      res.statusCode = 403;
      res.send('Method not implemented');
   });

export default images;
