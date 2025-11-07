import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";


const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Clínica Médica",
      version: "1.0.0",
      description: "Documentação gerada automaticamente com Swagger UI",
    },
    servers: [{ url: "http://localhost:3000" }],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [{ bearerAuth: [] }],
  },
  apis: ["./src/routes/*.js"], // <-- Caminho absoluto correto
};


const swaggerSpec = swaggerJsDoc(options);


export function swaggerDocs(app) {
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  console.log("📘 Swagger disponível em: http://localhost:3000/docs");
}
