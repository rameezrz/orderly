import swaggerJsdoc from "swagger-jsdoc";
import YAML from "yamljs";
import path from "path";

const swaggerDocument = YAML.load(path.join(__dirname, "docs/suppliers.yaml"));

if (!swaggerDocument) {
  throw new Error("Failed to load the Swagger document");
}

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Orderly API",
      version: "1.0.0",
      description: "API documentation for Orderly application.",
    },
    servers: [
      {
        url: process.env.BASE_URL || "http://localhost:5000",
      },
    ],
    paths: swaggerDocument.paths,
    components: swaggerDocument.components,
  },
  apis: [],
};

export const swaggerDocs = swaggerJsdoc(swaggerOptions);
