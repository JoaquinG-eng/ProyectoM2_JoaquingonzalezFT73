import { describe, test, expect, vi } from 'vitest';
import { validatePost } from '../src/middlewares/Validate.Posts.js';

describe('validatePost', () => {

const mockRes = () => {
const res = {};
res.status = vi.fn().mockReturnValue(res);
res.json = vi.fn().mockReturnValue(res);
return res;
};

test('pasa con datos válidos', () => {
const req = {
body: { title: 'Post', content: 'Contenido', authorId: 1 }
};
const res = mockRes();
const next = vi.fn();

validatePost(req, res, next);

expect(next).toHaveBeenCalled();
});

test('falla si faltan campos', () => {
const req = { body: {} };
const res = mockRes();
const next = vi.fn();

validatePost(req, res, next);

expect(res.status).toHaveBeenCalledWith(400);
});

test('falla si tipos incorrectos', () => {
const req = {
body: { title: 123, content: true, authorId: 1 }
};
const res = mockRes();

validatePost(req, res, vi.fn());

expect(res.status).toHaveBeenCalledWith(400);
});

test('falla si campos vacíos', () => {
const req = {
body: { title: '   ', content: '', authorId: 1 }
};
const res = mockRes();

validatePost(req, res, vi.fn());

expect(res.status).toHaveBeenCalledWith(400);
});

test('falla si authorId inválido', () => {
const req = {
body: { title: 'Post', content: 'Contenido', authorId: 'abc' }
};
const res = mockRes();

validatePost(req, res, vi.fn());

expect(res.status).toHaveBeenCalledWith(400);
});

});