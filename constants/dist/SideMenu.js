"use strict";
exports.__esModule = true;
exports.menuItems = void 0;
var react_1 = require("react");
var lu_1 = require("react-icons/lu");
var tb_1 = require("react-icons/tb");
var pi_1 = require("react-icons/pi");
exports.menuItems = [
    {
        id: "dashboard",
        label: "Dashboard",
        path: "/",
        icon: react_1["default"].createElement(lu_1.LuLayoutDashboard, { size: 25 })
    },
    {
        id: "products",
        label: "Products",
        path: "/products",
        icon: react_1["default"].createElement(tb_1.TbBrandProducthunt, { size: 25 })
    },
    {
        id: "visitors",
        label: "Visitors",
        path: "/visitors",
        icon: react_1["default"].createElement(pi_1.PiUsersFourLight, { size: 25 })
    },
];
