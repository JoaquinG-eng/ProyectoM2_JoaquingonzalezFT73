import pkg from "pg";
const { Pool } = pkg;

import dotenv from "dotenv";
dotenv.config();

console.log("DB_USER:", process.env.DB_USER);
console.log("DB_PASSWORD:", process.env.DB_PASSWORD);

let pool = new Pool({
connectionString: process.env.DATABASE_URL,
});

export default pool;