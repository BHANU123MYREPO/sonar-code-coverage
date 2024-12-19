const request = require('supertest');
const app = require('../server'); // Assuming your express app is exported

describe('GET /api/users', () => {
  it('should return a message', async () => {
    const res = await request(app).get('/api/users');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello from the API');
  });
});
