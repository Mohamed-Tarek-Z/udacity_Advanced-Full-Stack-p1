import supertest from 'supertest';
import app from '../../index';

const req = supertest(app);
describe('Test endpoints from routes index', () => {
   describe('Root path', () => {
      it('root endpoint', async (done) => {
         const res = await req.get('/');
         expect(res.status).toBe(200);
         done();
      });
   });

   describe('images path', () => {
      it('images endpoint status = 400 (bad request)', async (done) => {
         const res = await req.get('/images');
         expect(res.status).toBe(400);
         done();
      });
   });

   describe('Random path', () => {
      it('random endpoint ', async (done) => {
         const res = await req.get('/rand');
         expect(res.status).toBe(404);
         done();
      });
   });
});
