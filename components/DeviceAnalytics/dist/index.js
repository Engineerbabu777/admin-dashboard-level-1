"use client";
"use strict";
exports.__esModule = true;
var config_1 = require("@/utils/config");
var react_apexcharts_1 = require("react-apexcharts");
function getDeviceByVisitors(data, getDevice) {
    if (data &&
        data.length &&
        data.filter(function (item) { return item.device === getDevice; }).length === 0)
        return 0;
    return data && data.length
        ? data
            .filter(function (item) { return item.device === getDevice; })
            .reduce(function (acc, obj) { return acc + obj.visitors; }, 0)
        : 0;
}
function DeviceAnalytics(_a) {
    var allVisitors = _a.allVisitors;
    var series = [
        getDeviceByVisitors(allVisitors, "desktop"),
        getDeviceByVisitors(allVisitors, "laptop"),
        getDeviceByVisitors(allVisitors, "tablet"),
        getDeviceByVisitors(allVisitors, "mobile"),
    ];
    return (React.createElement("div", { className: "col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7 pb-7 shadow sm:px-7.5 xl:col-span-5" },
        React.createElement("div", { className: "flex w-full flex-col flex-wrap items-start justify-between gap-3 sm:flex-nowrap" },
            React.createElement("p", { className: "font-bold text-primary" }, "Visitor Analytics By Devices"),
            React.createElement("div", { className: "w-full mb-2" },
                React.createElement("div", { id: "deviceAnalyticsChart", className: "mx-auto flex justify-center" },
                    React.createElement(react_apexcharts_1["default"], { options: config_1.deviceAnalyticsChartOptions, series: series, type: "donut", height: 350 }))))));
}
exports["default"] = DeviceAnalytics;
