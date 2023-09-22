"use strict";
exports.__esModule = true;
exports.Product = void 0;
var mongoose_1 = require("mongoose");
var ProductSchema = new mongoose_1["default"].Schema({
    name: String,
    price: Number,
    visitors: Number,
    sales: Number,
    month: String
}, { timestamps: true });
exports.Product = mongoose_1["default"].models.Product || mongoose_1["default"].model("Product", ProductSchema);
