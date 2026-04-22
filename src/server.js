import dotenv from "dotenv";

  dotenv.config();

import app from "./app.js";
import pool from "./db/index.js";

const PORT = process.env.PORT || "3000";
const API_DOCS_URL = process.env.API_DOCS_URL || "http://localhost:3000/api-docs";

pool.query("SELECT 1")
  .then(() => console.log(" ✅ Base de datos conectada correctamente")) 
  .catch(err => console.error(" Error de conexión a DB:", err));


app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});