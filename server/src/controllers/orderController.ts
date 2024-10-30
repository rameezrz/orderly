import { Request, Response, NextFunction } from "express";
import { orderRepository } from "../repositories";
import { validateObjectIdOrThrow } from "../validations";
import { AppError } from "../utils";

export const createOrder = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const order = await orderRepository.createOrder(req.body);
    res.status(201).json(order);
  } catch (error) {
    next(error);
  }
};

export const getOrderById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    validateObjectIdOrThrow(req.params.id);
    const order = await orderRepository.getOrderById(req.params.id);
    if (!order) {
      throw new AppError("Order not found", 404);
    }
    res.json(order);
  } catch (error) {
    next(error);
  }
};

export const getOrders = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const orders = await orderRepository.getOrders();
    res.json(orders);
  } catch (error) {
    next(error);
  }
};

export const updateOrder = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    validateObjectIdOrThrow(req.params.id);
    const order = await orderRepository.updateOrder(req.params.id, req.body);
    if (!order) {
      throw new AppError("Order not found", 404);
    }
    res.json(order);
  } catch (error) {
    next(error);
  }
};

export const deleteOrder = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    validateObjectIdOrThrow(req.params.id);
    const order = await orderRepository.deleteOrder(req.params.id);
    if (!order) {
      throw new AppError("Order not found", 404);
    }
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};
