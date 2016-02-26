import server from '../dist/lib/server';
import request from 'supertest';


describe('GET /hello/monkey', function(){
  it('respond with json', function(done){
    request(server)
      .get('/hello/monkey')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  })
});