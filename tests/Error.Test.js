import { describe, test, expect } from 'vitest';
import request from 'supertest';
import app from '../src/app.js';

describe('Errores API', () => {

test('GET author inexistente devuelve 404', async () => {
const res = await request(app).get('/api/authors/999999');

expect(res.statusCode).toBe(404);
expect(res.body).toHaveProperty('error');
});

test('GET post inexistente devuelve 404', async () => {
const res = await request(app).get('/api/posts/999999');

expect(res.statusCode).toBe(404);
expect(res.body).toHaveProperty('error');
});

test('POST post sin datos devuelve 400', async () => {
const res = await request(app)
.post('/api/posts')
.send({});

expect(res.statusCode).toBe(400);
expect(res.body).toHaveProperty('error');
});

test('ruta inexistente devuelve 404', async () => {
const res = await request(app).get('/api/no-existe');

expect(res.statusCode).toBe(404);
});

});