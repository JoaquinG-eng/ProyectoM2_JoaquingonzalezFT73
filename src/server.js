import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger.json" assert { type: "json" };

import authorsRoutes from "./routes/Authors.Routes.js";
import postsRoutes from "./routes/Posts.Routes.js";

const app = express();

app.use(express.json());

// Rutas
app.use("/api/authors", authorsRoutes);
app.use("/api/posts", postsRoutes);

// Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Puerto
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
console.log(`Servidor corriendo en http://localhost:${PORT}`);
});