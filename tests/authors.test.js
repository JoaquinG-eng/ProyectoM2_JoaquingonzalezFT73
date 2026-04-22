import { describe, test, expect } from 'vitest';
import request from 'supertest';
import app from '../src/app.js';

let createdAuthorId;

describe('POST /api/authors', () => {

test('crea un autor correctamente', async () => {
const res = await request(app)
.post('/api/authors')
.send({
name: 'completar', 
email: 'autor@test.com'
});

expect(res.statusCode).toBe(201);
expect(res.body).toHaveProperty('id');

createdAuthorId = res.body.id;
});

test('falla si faltan datos', async () => {
const res = await request(app)
.post('/api/authors')
.send({});

expect(res.statusCode).toBe(400);
});

});


describe('GET /api/authors', () => {

test('devuelve lista de autores', async () => {
const res = await request(app).get('/api/authors');

expect(res.statusCode).toBe(200);
expect(Array.isArray(res.body)).toBe(true);
});

});


describe('GET /api/authors/:id', () => {

test('devuelve un autor existente', async () => {
const res = await request(app).get(`/api/authors/${createdAuthorId}`);

expect(res.statusCode).toBe(200);
expect(res.body).toHaveProperty('id');
});

test('devuelve 404 si no existe', async () => {
const res = await request(app).get('/api/authors/99999');

expect(res.statusCode).toBe(404);
});

});


describe('PUT /api/authors/:id', () => {

test('actualiza un autor', async () => {
const res = await request(app)
.put(`/api/authors/${createdAuthorId}`)
.send({
name: 'Autor Actualizado',
email: 'nuevo@test.com'
});

expect(res.statusCode).toBe(200);
expect(res.body.name).toBe('Autor Actualizado');
});

test('devuelve 404 si no existe', async () => {
const res = await request(app)
.put('/api/authors/99999')
.send({
name: 'nombre',
email: 'nombre@test.com'
});

expect(res.statusCode).toBe(404);
});

});


describe('DELETE /api/authors/:id', () => {

test('elimina un autor', async () => {
const res = await request(app)
.delete(`/api/authors/${createdAuthorId}`);

expect([200, 204]).toContain(res.statusCode);
});

});