"use strict";
var _a;
exports.__esModule = true;
exports.userModel = void 0;
var mongoose_1 = require("mongoose");
var userSchema = new mongoose_1["default"].Schema({
    // EMAIL!
    email: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
        unique: true
    }
}, {
    timestamps: true
});
exports.userModel = ((_a = mongoose_1["default"] === null || mongoose_1["default"] === void 0 ? void 0 : mongoose_1["default"].models) === null || _a === void 0 ? void 0 : _a.user) || mongoose_1["default"].model('user', userSchema);
