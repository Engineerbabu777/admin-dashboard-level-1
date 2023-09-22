"use client";
"use strict";
exports.__esModule = true;
function Table(_a) {
    var _b = _a.data, data = _b === void 0 ? [] : _b, tableHeaderText = _a.tableHeaderText, _c = _a.tableHeaderCells, tableHeaderCells = _c === void 0 ? [] : _c;
    console.log(data);
    return (React.createElement("div", { className: "rounded-sm border mt-5 border-stroke bg-white px-5 pt-6 pb-2.5 shadow sm:px-7.5 xl:pb-1" },
        React.createElement("h4", { className: "mb-6 text-xl font-semibold text-black" }, tableHeaderText),
        React.createElement("div", { className: "flex flex-col" },
            React.createElement("div", { className: "grid grid-cols-6 rounded-sm bg-gray-2 sm:grid-cols-5" }, tableHeaderCells && tableHeaderCells.length
                ? tableHeaderCells.map(function (item) { return (React.createElement("div", { className: "p-2.5 text-center xl:p-5", key: item.id }, item.label)); })
                : null),
            data && data.length
                ? data.map(function (item) { return (React.createElement("div", { className: "grid grid-cols-6 border-b border-stroke sm:grid-cols-5", key: item._id }, tableHeaderCells.map(function (tableCell) { return (React.createElement("div", { key: "" + item._id + tableCell.id, className: "flex items-center justify-center p-2.5 xl:p-5" },
                    React.createElement("p", null, item[tableCell.id]))); }))); })
                : null)));
}
exports["default"] = Table;
