import supertest from 'supertest';
import app from '../index';

const req = supertest(app);
describe('Test endpoints from main index', () => {
   describe('Root path', () => {
      it('root endpoint', async (done) => {
         const res = await req.get('/');
         expect(res.status).toBe(200);
         done();
      });

      it('root endpoint = 403 (not implemented method)', async (done) => {
         const res = await req.post('/');
         expect(res.status).toBe(403);
         done();
      });
   });

   describe('images path', () => {
      it('images endpoint status = 400 (bad request)', async (done) => {
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
});
