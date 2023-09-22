"use client";
"use strict";
exports.__esModule = true;
var config_1 = require("@/utils/config");
var react_apexcharts_1 = require("react-apexcharts");
var monthsArray = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
];
function getSales(products, getMonth) {
    if (products.filter(function (item) { return item.month === getMonth; }).length === 0)
        return 0;
    return products
        .filter(function (item) { return item.month === getMonth; })
        .reduce(function (acc, productItem) { return acc + productItem.sales; }, 0);
}
function getRevenue(products, getMonth) {
    if (products.filter(function (item) { return item.month === getMonth; }).length === 0)
        return 0;
    return products
        .filter(function (item) { return item.month === getMonth; })
        .reduce(function (acc, productItem) { return acc + productItem.revenue; }, 0);
}
function getCost(products, getMonth) {
    if (products.filter(function (item) { return item.month === getMonth; }).length === 0)
        return 0;
    return products
        .filter(function (item) { return item.month === getMonth; })
        .reduce(function (acc, productItem) { return acc + productItem.cost; }, 0);
}
function YearlyAnalyticsChart(_a) {
    var allProducts = _a.allProducts;
    console.log(allProducts);
    var series = [
        {
            name: "Sales",
            data: monthsArray.map(function (item) { return getSales(allProducts, item); })
        },
        {
            name: "Cost",
            data: monthsArray.map(function (item) { return getCost(allProducts, item); })
        },
        {
            name: "Revenue",
            data: monthsArray.map(function (item) { return getRevenue(allProducts, item); })
        },
    ];
    return (React.createElement("div", { className: "col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7 pb-7 shadow sm:px-7.5 xl:col-span-8" },
        React.createElement("div", { className: "flex w-full flex-col flex-wrap items-start justify-between gap-3 sm:flex-nowrap" },
            React.createElement("p", { className: "font-bold text-primary" }, "Yearly Analytics Overview"),
            React.createElement("div", { className: "w-full" },
                React.createElement("div", { id: "YearlyAnalyticsChart", className: "-ml-5" },
                    React.createElement(react_apexcharts_1["default"], { options: config_1.yearlyAnalyticsChartOptions, series: series, type: "area", height: 350 }))))));
}
exports["default"] = YearlyAnalyticsChart;
