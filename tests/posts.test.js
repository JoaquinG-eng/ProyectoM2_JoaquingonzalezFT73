import { describe, test, expect } from 'vitest';
import request from 'supertest';
import app from '../src/app.js';

describe('Posts API', () => {

test('GET /api/posts devuelve lista', async () => {
const res = await request(app).get('/api/posts');

expect(res.statusCode).toBe(200);
expect(Array.isArray(res.body)).toBe(true);
});

test('POST /api/posts crea post correctamente', async () => {
const res = await request(app)
.post('/api/posts')
.send({
title: 'Hola mundo',
content: 'Contenido',
authorId: 1
});

expect(res.statusCode).toBe(201);
expect(res.body).toHaveProperty('id');
});

test('POST /api/posts falla sin title', async () => {
const res = await request(app)
.post('/api/posts')
.send({
content: 'texto',
authorId: 1
});

expect(res.statusCode).toBe(400);
});

test('POST /api/posts falla sin authorId', async () => {
const res = await request(app)
.post('/api/posts')
.send({
title: 'Test',
content: 'texto'
});

expect(res.statusCode).toBe(400);
});

});