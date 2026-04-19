import * as service from "../services/Authors.Services.js";

export const getAuthors = async (req, res, next) => {
try {
const data = await service.getAllAuthors();
res.json(data);
} catch (err) {
next(err);
}
};

export const getAuthorById = async (req, res, next) => {
try {
const data = await service.getAuthorById(req.params.id);

if (!data) {
return res.status(404).json({ error: "Author not found" });
}

res.json(data);
} catch (err) {
next(err);
}
};

export const createAuthor = async (req, res, next) => {
try {
const { name, email } = req.body;

if (!name || !email) {
return res.status(400).json({ error: "Missing fields" });
}

const data = await service.createAuthor(req.body);
res.status(201).json(data);
} catch (err) {
next(err);
}
};

export const updateAuthor = async (req, res, next) => {
try {
const data = await service.updateAuthor(req.params.id, req.body);

if (!data) {
return res.status(404).json({ error: "Author not found" });
}

res.json(data);
} catch (err) {
next(err);
}
};

export const deleteAuthor = async (req, res, next) => {
try {
await service.deleteAuthor(req.params.id);
res.json({ message: "Author deleted" });
} catch (err) {
next(err);
}
};