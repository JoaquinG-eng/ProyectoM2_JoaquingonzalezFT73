import express from "express";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";

import authorsRoutes from "./routes/Authors.Routes.js";
import postsRoutes from "./routes/Posts.Routes.js";
import { errorHandler } from "./middlewares/Error.Middlewares.js";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(cors());


app.use("/api/authors", authorsRoutes);
app.use("/api/posts", postsRoutes);


const swaggerDocument = YAML.load("src/yaml/swagger.yaml");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.use(errorHandler);

export default app;