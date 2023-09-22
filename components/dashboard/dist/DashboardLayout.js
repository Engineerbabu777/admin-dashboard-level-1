"use client";
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var Card_1 = require("../card/Card");
var fa_1 = require("react-icons/fa");
var bi_1 = require("react-icons/bi");
var md_1 = require("react-icons/md");
var bs_1 = require("react-icons/bs");
var Main_1 = require("../YearlyAnalyticsChart/Main");
var VisitorsAnalytics_1 = require("../VisitorsAnalytics");
var DeviceAnalytics_1 = require("../DeviceAnalytics");
function DashboardLayout(_a) {
    var allVisitors = _a.allVisitors, allProducts = _a.allProducts;
    return (React.createElement(React.Fragment, null,
        React.createElement("div", null,
            React.createElement("div", { className: "grid grid-cols-4 gap-4 md:grid-cols-4 md:gap-6 xl:grid-cols-4 2xl:gap-7" },
                React.createElement(Card_1["default"], { icon: React.createElement(fa_1.FaUsers, { size: 25 }), data: allVisitors && allVisitors.length
                        ? allVisitors.reduce(function (acc, visitorItem) {
                            return parseInt(acc + visitorItem.premiumUserNo);
                        }, 0)
                        : 0, label: "Total Premium Visitors" }),
                React.createElement(Card_1["default"], { data: allProducts && allProducts.length, icon: React.createElement(md_1.MdOutlineProductionQuantityLimits, { size: 25 }), label: "Total Products" }),
                React.createElement(Card_1["default"], { data: allProducts && allProducts.length
                        ? allProducts.reduce(function (acc, productItem) { return parseInt(acc + productItem.sales); }, 0)
                        : 0, label: "Total Sales", icon: React.createElement(bi_1.BiMoneyWithdraw, { size: 25 }) }),
                React.createElement(Card_1["default"], { data: allVisitors && allVisitors.length
                        ? allVisitors.reduce(function (acc, visitorItem) { return parseInt(acc + visitorItem.visitors); }, 0)
                        : 0, label: "Total Visitors", icon: React.createElement(bs_1.BsFillPersonCheckFill, { size: 25 }) })),
            React.createElement("div", { className: "mt-44 grid-cols-12 grid gap-4 md:mt-6 md:gap-6 2xl:mt-7 2xl:gap-7" },
                React.createElement(Main_1["default"], { allProducts: allProducts && allProducts.length
                        ? allProducts.map(function (productItem) { return (__assign(__assign({}, productItem), { revenue: productItem.price * productItem.sales -
                                productItem.sales * 10, cost: productItem.sales * 10 })); })
                        : [] }),
                React.createElement(VisitorsAnalytics_1["default"], { allVisitors: allVisitors && allVisitors.length ? allVisitors : [] })),
            React.createElement("div", { className: "cols-span-12" },
                React.createElement(DeviceAnalytics_1["default"], { allVisitors: allVisitors && allVisitors.length ? allVisitors : [] })))));
}
exports["default"] = DashboardLayout;
