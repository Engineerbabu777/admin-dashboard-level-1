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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var config_1 = require("@/utils/config");
var react_apexcharts_1 = require("react-apexcharts");
function getAllVisitorsByCountry(data, country) {
    if (data && data.length === 0)
        return 0;
    return data
        .filter(function (item) { return item.location === country; })
        .reduce(function (acc, visitorItem) { return acc + visitorItem.visitors; }, 0);
}
function getAllPremiumVisitorsByCountry(data, country) {
    if (data && data.length === 0)
        return 0;
    return data
        .filter(function (item) { return item.location === country; })
        .reduce(function (acc, visitorItem) { return acc + visitorItem.premiumUserNo; }, 0);
}
function VisitorsAnalytics(_a) {
    var allVisitors = _a.allVisitors;
    var uniqueLocation = __spreadArrays(new Set(allVisitors.map(function (item) { return item.location; })));
    console.log(uniqueLocation, "allVisitors");
    var maxUniqueLocationToShow = uniqueLocation.slice(0, uniqueLocation && uniqueLocation.length > 4 ? 4 : uniqueLocation.length);
    var updatedOptions = __assign(__assign({}, config_1.visitorAnalyticsChartOptions), { xaxis: {
            categories: maxUniqueLocationToShow
        } });
    var series = [
        {
            name: "Visitors",
            data: maxUniqueLocationToShow.map(function (locationItem) {
                return getAllVisitorsByCountry(allVisitors, locationItem);
            })
        },
        {
            name: "Premium Visitors",
            data: maxUniqueLocationToShow.map(function (locationItem) {
                return getAllPremiumVisitorsByCountry(allVisitors, locationItem);
            })
        },
    ];
    return (React.createElement("div", { className: "col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7 pb-7 shadow sm:px-7.5 xl:col-span-4" },
        React.createElement("div", { className: "flex w-full flex-col flex-wrap items-start justify-between gap-3 sm:flex-nowrap" },
            React.createElement("p", { className: "font-bold text-primary" }, "Visitors By Country"),
            React.createElement("div", { className: "w-full" },
                React.createElement("div", { id: "YearlyAnalyticsChart", className: "-ml-5" },
                    React.createElement(react_apexcharts_1["default"], { options: updatedOptions, series: series, type: "area", height: 350 }))))));
}
exports["default"] = VisitorsAnalytics;
