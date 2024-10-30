import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { errorHandler, requestLogger } from "./middlewares";
import supplierRoutes from "./routes/supplierRoutes";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(requestLogger);

app.get("/", (req, res) => {
  res.status(200).send("Welcome to Orderly API...");
});

app.use("/api/v1/suppliers", supplierRoutes);

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.use(errorHandler);

export default app;
