import express from "express";
import { validate } from "../middlewares";
import { createOrderSchema } from "../validations";
import {
  createOrder,
  getOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
} from "../controllers";

const router = express.Router();

router.post("/", validate(createOrderSchema), createOrder);
router.get("/", getOrders);
router.get("/:id", getOrderById);
router.put("/:id", validate(createOrderSchema), updateOrder);
router.delete("/:id", deleteOrder);

export default router;
