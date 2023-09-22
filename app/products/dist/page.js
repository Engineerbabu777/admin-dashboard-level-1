"use strict";
exports.__esModule = true;
var ProductLayout_1 = require("@/components/products/ProductLayout");
var ProductListing_1 = require("@/components/products/ProductListing");
var react_1 = require("react");
function products(_a) {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(ProductLayout_1["default"], null,
            react_1["default"].createElement(ProductListing_1["default"], null))));
}
exports["default"] = products;
