import { describe, test, expect } from 'vitest';
import request from 'supertest';
import app from '../src/app.js';

let createdPostId;

describe('POST /api/posts', () => {

test('crea un post correctamente', async () => {
const res = await request(app)
.post('/api/posts')
.set('Content-Type', 'application/json')
.send({
title: 'Test',
content: 'Contenido',
authorId: 1
});

expect(res.statusCode).toBe(201);
expect(res.body).toHaveProperty('id');
expect(res.body.title).toBe('Test');

createdPostId = res.body.id; 
});

test('falla si faltan datos', async () => {
const res = await request(app)
.post('/api/posts')
.set('Content-Type', 'application/json')
.send({});

expect(res.statusCode).toBe(400);
});

});


describe('GET /api/posts', () => {

test('obtiene todos los posts', async () => {
const res = await request(app).get('/api/posts');

expect(res.statusCode).toBe(200);
expect(Array.isArray(res.body)).toBe(true);
});

});


describe('GET /api/posts/:id', () => {

test('obtiene un post existente', async () => {
const res = await request(app).get(`/api/posts/${createdPostId}`);

expect(res.statusCode).toBe(200);
expect(res.body).toHaveProperty('id');
});

test('devuelve 404 si no existe', async () => {
const res = await request(app).get('/api/posts/99999');

expect(res.statusCode).toBe(404);
});

});


describe('PUT /api/posts/:id', () => {

test('actualiza un post', async () => {
const res = await request(app)
.put(`/api/posts/${createdPostId}`)
.send({
title: 'Actualizado',
content: 'Nuevo contenido',
authorId: 1
});

expect(res.statusCode).toBe(200);
expect(res.body.title).toBe('Actualizado');
});

});


describe('GET /api/posts/author/:authorId', () => {

test('obtiene posts por autor', async () => {
const res = await request(app).get('/api/posts/author/1');

expect(res.statusCode).toBe(200);
expect(Array.isArray(res.body)).toBe(true);
});

});


describe('DELETE /api/posts/:id', () => {

test('elimina un post', async () => {
const res = await request(app).delete(`/api/posts/${createdPostId}`);

expect([200, 204]).toContain(res.statusCode);
});

});

describe('Errores', () => {
test('maneja error interno (500)', async () => {
const res = await request(app).get('/api/posts/NaN');

expect(res.statusCode).toBeGreaterThanOrEqual(400);
});
});