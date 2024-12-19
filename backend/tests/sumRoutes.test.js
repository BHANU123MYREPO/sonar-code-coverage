// tests/sumRoutes.test.js
const request = require('supertest');
const app = require('../src/server'); // Importing the app for testing

describe('Sum Route Tests', () => {

  it('should calculate the sum of two numbers', async () => {
    const response = await request(app).get('/sum?a=3&b=4');
    expect(response.status).toBe(200);
    expect(response.body.sum).toBe(7);
  });

  it('should return an error if query parameters are missing', async () => {
    const response = await request(app).get('/sum?a=3');
    expect(response.status).toBe(400);
    expect(response.body.error).toBe('Missing query parameters a and b');
  });

  it('should return an error if query parameters are not valid numbers', async () => {
    const response = await request(app).get('/sum?a=abc&b=4');
    expect(response.status).toBe(400);
    expect(response.body.error).toBe('Missing query parameters a and b');
  });

});
