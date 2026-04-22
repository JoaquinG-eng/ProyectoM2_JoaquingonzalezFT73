import { describe, test, expect, vi } from 'vitest';
import { validateAuthor } from '../src/middlewares/Validate.Authors.js';

describe('validateAuthor', () => {

const mockRes = () => {
const res = {};
res.status = vi.fn().mockReturnValue(res);
res.json = vi.fn().mockReturnValue(res);
return res;
};

test('pasa con datos válidos', () => {
const req = {
body: { name: 'Joaquin', email: 'test@mail.com' }
};
const res = mockRes();
const next = vi.fn();

validateAuthor(req, res, next);

expect(next).toHaveBeenCalled();
});

test('falla si faltan campos', () => {
const req = { body: {} };
const res = mockRes();

validateAuthor(req, res, vi.fn());

expect(res.status).toHaveBeenCalledWith(400);
});

test('falla si tipos incorrectos', () => {
const req = {
body: { name: 123, email: true }
};
const res = mockRes();

validateAuthor(req, res, vi.fn());

expect(res.status).toHaveBeenCalledWith(400);
});

test('falla si campos vacíos', () => {
const req = {
body: { name: '   ', email: '' }
};
const res = mockRes();

validateAuthor(req, res, vi.fn());

expect(res.status).toHaveBeenCalledWith(400);
});

test('falla si email inválido', () => {
const req = {
body: { name: 'Joaquin', email: 'incorrecto' }
};
const res = mockRes();

validateAuthor(req, res, vi.fn());

expect(res.status).toHaveBeenCalledWith(400);
});

});