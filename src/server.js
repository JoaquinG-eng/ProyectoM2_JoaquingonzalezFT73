import express from "express";
import swaggerUi from "swagger-ui-express";
import fs from "fs";

import authorsRoutes from "./routes/Authors.Routes.js";
import postsRoutes from "./routes/Posts.Routes.js";

import path from "path";

const swaggerPath = path.resolve("src/swagger/swagger.json");

const swaggerDocument = JSON.parse(
fs.readFileSync(swaggerPath, "utf-8")
);
const app = express();

app.use(express.json()); 

// rutas
app.use("/api/authors", authorsRoutes);
app.use("/api/posts", postsRoutes);

// swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
console.log(`Servidor corriendo en http://localhost:${PORT}`);
});