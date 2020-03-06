const request = require('supertest');
const db = require('../database/db-config');
const server = require('../api/server');

beforeEach(() => {
    return db.migrate
      .rollback()
      .then(() => db.migrate.latest())
      .then(() => db.seed.run());
  });

  
//get all users
describe('GET / all users user', () => {
    it('responds with status code 200 and single user', async () => {
      const res = await request(server).get('/api/users');
      // console.log(res.body);
      expect(res.status).toBe(200);
      expect(res.body).toHaveLength(3);
    });
  });
  
