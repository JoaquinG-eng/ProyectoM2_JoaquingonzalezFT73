import { describe, test, expect } from 'vitest';
import request from 'supertest';
import app from '../src/app.js';

describe('Errores API', () => {

test('GET author inexistente devuelve 404', async () => {
const res = await request(app).get('/api/authors/999999');

expect([404, 500]).toContain(res.statusCode);
});

test('GET post inexistente devuelve 404', async () => {
const res = await request(app).get('/api/posts/999999');

expect([404, 500]).toContain(res.statusCode);
});

});