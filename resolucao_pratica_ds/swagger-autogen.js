// Path: swagger-autogen.js

import swaggerAutogen from "swagger-autogen";

const doc = {
  info: {
    title: "API Clínica Médica",
    version: "1.0.0",
    description: "Documentação gerada automaticamente com Swagger",
  },
  host: "localhost:3000",
  schemes: ["http"],
  securityDefinitions: {
    bearerAuth: {
      type: "apiKey",
      name: "Authorization",
      in: "header",
    },
  },
  security: [{ bearerAuth: [] }],
};

const outputFile = "./swagger-output.json";
const endpointsFiles = ["./src/routes/**/*.js"]; // Captura todas as rotas

swaggerAutogen()(outputFile, endpointsFiles, doc);
