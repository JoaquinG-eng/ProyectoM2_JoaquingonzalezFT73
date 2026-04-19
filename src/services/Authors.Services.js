import pool from "../db/index.js";


export const getAllAuthors = async () => {
const { rows } = await pool.query("SELECT * FROM authors");
return rows;
};


export const getAuthorById = async (id) => {
const { rows } = await pool.query(
"SELECT * FROM authors WHERE id = $1",
[id]
);
return rows[0];
};


export const createAuthor = async ({ name, email }) => {
const { rows } = await pool.query(
"INSERT INTO authors (name, email) VALUES ($1, $2) RETURNING *",
[name, email]
);
return rows[0];
};


export const updateAuthor = async (id, { name, email }) => {
const { rows } = await pool.query(
"UPDATE authors SET name=$1, email=$2 WHERE id=$3 RETURNING *",
[name, email, id]
);
return rows[0];
};


export const deleteAuthor = async (id) => {
await pool.query("DELETE FROM authors WHERE id=$1", [id]);
};