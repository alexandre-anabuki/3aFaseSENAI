// Path: src/config/swagger.js

import swaggerUi from "swagger-ui-express";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const swaggerFile = require("../../swagger-output.json");

export function swaggerDocs(app) {
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
  console.log("📘 Swagger disponível em: http://localhost:3000/docs");
}
