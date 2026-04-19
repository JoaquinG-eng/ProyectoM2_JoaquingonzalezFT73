import pkg from "pg"; 
const { Pool } = pkg;

const pool = new Pool({
user: "joaquin",
host: "localhost",
database: "miniblog",
password: "admin",
port: 5432,
});

export default pool;