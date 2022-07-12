import resizeImage from '../../utils/ImageProcessing';
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

/*tested most of it at the route/image */

describe('Test Image stuff', () => {
   it('resize folder exist', () => {
      expect(
         fs.existsSync(path.resolve(__dirname, '../../../assets/resized'))
      ).toBeTruthy();
   });
});

describe('Test resize function', () => {
   const resizedir = path.resolve(__dirname, '../../../assets/resized');
   beforeAll(() => {
      const files: string[] = fs.readdirSync(resizedir);
      for (const file of files) {
         fs.unlinkSync(path.join(resizedir, file));
      }
   });

   it('Test resize function if the new img exist and correct', async () => {
      const newimgpath = await resizeImage('fjord', 200, 200);
      const metadata = await sharp(newimgpath).metadata();
      expect(fs.existsSync(newimgpath)).toBeTruthy();
      expect(metadata.width == 200 && metadata.height == 200).toBeTruthy();
   });

   it('resize again to see if image will be generated or retrieved', async () => {
      expect(fs.existsSync(await resizeImage('fjord', 200, 200))).toBeTruthy();
   });
});
