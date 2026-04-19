import * as service from "../services/Posts.Services.js";

export const getPosts = async (req, res, next) => {
try {
const data = await service.getAllPosts();
res.json(data);
} catch (err) {
next(err);
}
};

export const getPostById = async (req, res, next) => {
try {
const data = await service.getPostById(req.params.id);

if (!data) {
return res.status(404).json({ error: "Post not found" });
}

res.json(data);
} catch (err) {
next(err);
}
};

export const getPostsByAuthor = async (req, res, next) => {
try {
const data = await service.getPostsByAuthor(req.params.authorId);
res.json(data);
} catch (err) {
next(err);
}
};

export const createPost = async (req, res, next) => {
try {
const { title, content, authorId } = req.body;

if (!title || !content || !authorId) {
return res.status(400).json({ error: "Missing fields" });
}

const data = await service.createPost({
title,
content,
author_id: authorId, 
});

res.status(201).json(data);
} catch (err) {
next(err);
}
};

export const updatePost = async (req, res, next) => {
try {
const { title, content, authorId } = req.body;

if (!title || !content || !authorId) {
return res.status(400).json({ error: "Missing fields" });
}

const data = await service.updatePost(req.params.id, {
title,
content,
author_id: authorId,
});

if (!data) {
return res.status(404).json({ error: "Post not found" });
}

res.json(data);
} catch (err) {
next(err);
}
};

export const deletePost = async (req, res, next) => {
try {
await service.deletePost(req.params.id);
res.json({ message: "Post deleted" });
} catch (err) {
next(err);
}
};