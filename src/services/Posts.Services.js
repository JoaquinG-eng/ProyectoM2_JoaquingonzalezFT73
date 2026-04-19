import pool from "../db/index.js";


export const getAllPosts = async () => {
const { rows } = await pool.query("SELECT * FROM posts");
return rows;
};


export const getPostById = async (id) => {
const { rows } = await pool.query(
"SELECT * FROM posts WHERE id = $1",
[id]
);
return rows[0];
};


export const getPostsByAuthor = async (authorId) => {
const { rows } = await pool.query(
"SELECT * FROM posts WHERE author_id = $1",
[authorId]
);
return rows;
};


export const createPost = async ({ title, content, author_id }) => {
const { rows } = await pool.query(
"INSERT INTO posts (title, content, author_id) VALUES ($1,$2,$3) RETURNING *",
[title, content, author_id]
);
return rows[0];
};


export const updatePost = async (id, { title, content, author_id }) => {
const { rows } = await pool.query(
"UPDATE posts SET title=$1, content=$2, author_id=$3 WHERE id=$4 RETURNING *",
[title, content, author_id, id]
);
return rows[0];
};


export const deletePost = async (id) => {
await pool.query("DELETE FROM posts WHERE id=$1", [id]);
};