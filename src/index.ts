import express from "express";
import swaggerUi from "swagger-ui-express";

import openApi from "./openapi.json";
import { usersRoutes } from "./routes/users.routes";

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(openApi));
app.use("/users", usersRoutes);

export { app };
