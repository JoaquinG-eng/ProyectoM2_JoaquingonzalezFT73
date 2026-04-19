import { describe, test, expect } from 'vitest';
import request from 'supertest';
import app from '../src/app.js';

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
  });

  test('falla si faltan datos', async () => {
    const res = await request(app)
      .post('/api/posts')
      .set('Content-Type', 'application/json')
      .send({});

    expect(res.statusCode).toBe(400);
  });

});