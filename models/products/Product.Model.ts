

import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  visitors: Number,
  sales: Number,
  month: String,
}, {timestamps : true});

export const Product =
  mongoose.models.Product || mongoose.model("Product", ProductSchema);
