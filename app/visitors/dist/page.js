"use strict";
exports.__esModule = true;
var VisitorLayout_1 = require("@/components/visitors/VisitorLayout");
var VisitorListing_1 = require("@/components/visitors/VisitorListing");
var react_1 = require("react");
function visitors(_a) {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(VisitorLayout_1["default"], null,
            react_1["default"].createElement(VisitorListing_1["default"], null))));
}
exports["default"] = visitors;
