import path from 'path';
import fs from 'fs';
import sharp from 'sharp';

const resizeImage = async (
   imagename: string,
   width: number,
   height: number
): Promise<string> => {
   const imagesDir: string = path.resolve(__dirname, '../../assets/images');
   const resizedDir: string = path.resolve(__dirname, '../../assets/resized');

   if (!fs.existsSync(resizedDir)) {
      await fs.promises.mkdir(resizedDir);
   }

   imagename = imagename.includes('jpg') ? imagename.split('.')[0] : imagename;

   if (!fs.existsSync(`${imagesDir}/${imagename}.jpg`)) {
      throw new Error('Image does not exist!');
   }

   if (width < 1 || isNaN(width) || height < 1 || isNaN(height)) {
      throw new Error('wrong width or height');
   }

   if (fs.existsSync(`${resizedDir}/${imagename}_${width}x${height}.jpg`)) {
      console.log('Already processed Before Image path returned');
      return `${resizedDir}/${imagename}_${width}x${height}.jpg`;
   }

   await sharp(`${imagesDir}/${imagename}.jpg`)
      .resize(width, height)
      .toFile(`${resizedDir}/${imagename}_${width}x${height}.jpg`);

   return `${resizedDir}/${imagename}_${width}x${height}.jpg`;
};

export default resizeImage;
