"use strict";
exports.__esModule = true;
exports.mongooseConnect = void 0;
var mongoose_1 = require("mongoose");
exports.mongooseConnect = function () {
    if (mongoose_1["default"].connection.readyState === 1) {
        return mongoose_1["default"].connection.asPromise();
    }
    else {
        return mongoose_1["default"].connect(process.env.MONGODB_URI);
    }
};
