"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var VisitorsSchema = new mongoose_1["default"].Schema({
    visitors: Number,
    location: String,
    device: String,
    premiumUserNo: Number,
    month: String
}, { timestamps: true });
var Visitor = mongoose_1["default"].models.Visitors || mongoose_1["default"].model("Visitors", VisitorsSchema);
exports["default"] = Visitor;
