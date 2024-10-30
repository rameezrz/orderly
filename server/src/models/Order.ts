import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  orderNo: { type: String, unique: true, required: true },
  orderDate: { type: Date, default: Date.now },
  supplier: { type: mongoose.Schema.Types.ObjectId, ref: "Supplier" },
  items: [
    {
      item: { type: mongoose.Schema.Types.ObjectId, ref: "Item" },
      orderQty: { type: Number, required: true },
      discount: { type: Number, default: 0 },
      itemAmount: { type: Number, required: true },
      netAmount: { type: Number, required: true },
    },
  ],
  itemTotal: { type: Number, required: true },
  discountTotal: { type: Number, required: true },
  netAmount: { type: Number, required: true },
});

const Order = mongoose.model("Order", OrderSchema);

export default Order;
