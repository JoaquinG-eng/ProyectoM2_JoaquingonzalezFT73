import express from "express";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";

import authorsRoutes from "./routes/authors.routes.js";
import postsRoutes from "./routes/posts.routes.js";
import { errorHandler } from "./middlewares/Error.Middlewares.js";

const app = express();

app.use(express.json());


app.use("/api/authors", authorsRoutes);
app.use("/api/posts", postsRoutes);


const swaggerDocument = YAML.load("src/yaml/swagger.yaml");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.use(errorHandler);

export default app;