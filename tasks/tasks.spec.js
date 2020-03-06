const server = require('../api/server');
const request = require('supertest');
const db = require('../database/db-config');

beforeEach(() => {
  return db.migrate
    .rollback()
    .then(() => db.migrate.latest())
    .then(() => db.seed.run());
});

describe('Get all task error(500)', () => {
    it('GET /api/tasks', async () => {
      const res = await request(server).get('/api/tasks');
      expect(res.type).toMatch(/json/i);
    });
  });