import express from "express";
import donenv from "dotenv";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";

import authorsRoutes from "./routes/Authors.Routes.js";
import postsRoutes from "./routes/Posts.Routes.js";

const app = express();

app.use(express.json());

// rutas
app.use("/api/authors", authorsRoutes);
app.use("/api/posts", postsRoutes);

// swagger
const swaggerDocument = YAML.load("src/yaml/swagger.yaml");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
console.log(`Servidor corriendo en http://localhost:${PORT}`);
});