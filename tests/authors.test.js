import { describe, test, expect } from 'vitest';
import request from 'supertest';
import app from '../src/app.js';

describe('GET /api/authors', () => {

test('devuelve lista de autores', async () => {
const res = await request(app).get('/api/authors');

expect(res.statusCode).toBe(200);
expect(Array.isArray(res.body)).toBe(true);
});

});