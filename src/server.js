import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";
import pool from "./db/index.js";

const PORT = process.env.PORT || 3000;

pool.query("SELECT 1")
  .then(() => console.log("✅ Base de datos conectada correctamente"))
  .catch(err => console.error("❌ Error de conexión a DB:", err));

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
  console.log(`📄 Documentación: http://localhost:${PORT}/api-docs`);
});