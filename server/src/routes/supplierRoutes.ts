import express from "express";
import { validate } from "../middlewares";
import { createSupplierSchema, updateSupplierSchema } from "../validations";
import {
  createSupplier,
  getSuppliers,
  getSupplierById,
  updateSupplier,
  deleteSupplier,
} from "../controllers";

const router = express.Router();

router.post("/", validate(createSupplierSchema), createSupplier);
router.get("/", getSuppliers);
router.get("/:id", getSupplierById);
router.put("/:id", validate(updateSupplierSchema), updateSupplier);
router.delete("/:id", deleteSupplier);

export default router;
