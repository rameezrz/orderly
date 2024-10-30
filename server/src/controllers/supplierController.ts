import { NextFunction, Request, Response } from "express";
import supplierRepository from "../repositories/supplierRepository";

export const createSupplier = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const supplier = await supplierRepository.createSupplier(req.body);
    res.status(201).json(supplier);
  } catch (error: any) {
    next(error);
  }
};

export const getSuppliers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const suppliers = await supplierRepository.getAllSuppliers();
    res.status(200).json(suppliers);
  } catch (error) {
    next(error);
  }
};

export const getSupplierById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const supplierId = req.params.id;
    const supplier = await supplierRepository.getSupplierById(supplierId);
    res.status(200).json(supplier);
  } catch (error) {
    next(error);
  }
};

export const updateSupplier = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const supplierId = req.params.id;
    const supplier = await supplierRepository.updateSupplier(
      supplierId,
      req.body
    );
    res.status(201).json(supplier);
  } catch (error: any) {
    next(error);
  }
};

export const deleteSupplier = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const supplierId = req.params.id;
    await supplierRepository.deleteSupplier(supplierId);
    res.status(200).json({ message: "Supplier deleted successfully" });
  } catch (error: any) {
    next(error);
  }
};
