const request = require('supertest');

const server = require('./api/server.js');

describe('/ route', () => {
    it('should return status code 200', async () => {
      let response = await request(server).get('/');

      expect(response.status).toBe(200);
    });
});
