"use client";
"use strict";
exports.__esModule = true;
exports.GlobalContext = void 0;
var react_1 = require("react");
exports.GlobalContext = react_1.createContext(null);
function GlobalContextProvider(_a) {
    var children = _a.children;
    var _b = react_1.useState(false), sideBarOpen = _b[0], setSideBarOpen = _b[1];
    return (React.createElement(exports.GlobalContext.Provider, { value: { sideBarOpen: sideBarOpen, setSideBarOpen: setSideBarOpen } }, children));
}
exports["default"] = GlobalContextProvider;
