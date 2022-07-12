import supertest from 'supertest';
import app from '../../../index';

const req = supertest(app);
describe('Test endpoints from image path', () => {
   describe('images path', () => {
      it('images endpoint status = 400 (bad req)', async (done) => {
         const res = await req.get('/images');
         expect(res.status).toBe(400);
         done();
      });
      it('images endpoint status = 403 (not implemented method)', async (done) => {
         const res = await req.delete('/images');
         expect(res.status).toBe(403);
         done();
      });
   });

   describe('Test Images with different params', () => {
      describe('Missing width or height', () => {
         it('status check', async (done) => {
            const res = await req.get('/images?imagename=encenadaport');
            expect(res.status).toBe(400);
            done();
         });

         it('text check', async (done) => {
            const res = await req.get('/images?imagename=encenadaport');
            expect(res.text).toContain('missing params');
            done();
         });
      });

      describe('negative width or height', () => {
         it('status check', async (done) => {
            const res = await req.get(
               '/images?imagename=encenadaport&width=-200&height=200'
            );
            expect(res.status).toBe(400);
            done();
         });

         it('text check', async (done) => {
            const res = await req.get(
               '/images?imagename=encenadaport&width=-200&height=200'
            );
            expect(res.text).toContain('wrong width or height');
            done();
         });
      });

      describe('no params', () => {
         it('status check', async (done) => {
            const res = await req.get('/images');
            expect(res.status).toBe(400);
            done();
         });

         it('text check', async (done) => {
            const res = await req.get('/images');
            expect(res.text).toContain('missing params');
            done();
         });
      });

      describe('valid params', () => {
         it('status check', async (done) => {
            const res = await req.get(
               '/images?imagename=encenadaport&width=500&height=500'
            );
            expect(res.status).toBe(200);
            done();
         });
      });
   });
});
