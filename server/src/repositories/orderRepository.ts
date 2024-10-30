import { Types } from "mongoose";
import { Order, IOrder, Item, IOrderItem } from "../models";
import { AppError } from "../utils";

class OrderRepository {
  async createOrder(data: Partial<IOrder>): Promise<IOrder> {
    const { supplier, items } = data;

    if (!items) {
      throw new AppError("Items are required", 400);
    }

    const orderItems: IOrderItem[] = await Promise.all(
      items?.map(async (orderItem) => {
        const itemData = await Item.findById(orderItem.item);
        if (!itemData) {
          throw new AppError(`Item with ID ${orderItem.item} not found`, 404);
        }

        const itemAmount = orderItem.orderQty * itemData.unitPrice;
        const netAmount = itemAmount - (orderItem.discount ?? 0);

        return {
          item: itemData._id as Types.ObjectId,
          orderQty: orderItem.orderQty,
          discount: orderItem.discount ?? 0,
          itemAmount,
          netAmount,
        };
      })
    );

    const itemTotal = orderItems.reduce(
      (acc, item) => acc + item.itemAmount,
      0
    );
    const discountTotal = orderItems.reduce(
      (acc, item) => acc + (item?.discount ?? 0),
      0
    );
    const netAmount = itemTotal - discountTotal;

    const newOrder = new Order({
      supplier,
      items: orderItems,
      itemTotal,
      discountTotal,
      netAmount,
    });

    return await newOrder.save();
  }

  async getOrderById(id: string): Promise<IOrder | null> {
    return await Order.findById(id)
      .populate("supplier")
      .populate("items.item")
      .exec();
  }

  async getOrders(): Promise<IOrder[]> {
    return await Order.find()
      .populate("supplier")
      .populate("items.item")
      .exec();
  }

  async updateOrder(id: string, data: Partial<IOrder>): Promise<IOrder | null> {
    return await Order.findByIdAndUpdate(id, data, { new: true })
      .populate("supplier")
      .populate("items.item")
      .exec();
  }

  async deleteOrder(id: string): Promise<IOrder | null> {
    return await Order.findByIdAndDelete(id).exec();
  }
}

export default new OrderRepository();
