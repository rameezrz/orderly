import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema(
  {
    itemNo: { type: String, unique: true, required: true },
    itemName: { type: String, required: true },
    inventoryLocation: String,
    brand: String,
    category: String,
    supplier: { type: mongoose.Schema.Types.ObjectId, ref: "Supplier" },
    stockUnit: String,
    unitPrice: { type: Number, required: true },
    itemImages: [String],
    status: { type: String, enum: ["Enabled", "Disabled"], default: "Enabled" },
  },
  {
    timestamps: true,
  }
);

const Item = mongoose.model("Item", ItemSchema);

export default Item;
