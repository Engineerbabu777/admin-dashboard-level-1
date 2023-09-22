"use strict";
exports.__esModule = true;
function Card(_a) {
    var data = _a.data, label = _a.label, icon = _a.icon;
    return (React.createElement("div", { className: "rounded-sm border border-stroke bg-white py-6 px-7.5 shadow" },
        React.createElement("div", { className: "flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2" }, icon),
        React.createElement("div", { className: "mt-4 flex items-center justify-between" },
            React.createElement("div", null,
                React.createElement("h4", { className: "text-title-md font-bold text-black" }, data),
                React.createElement("span", { className: "text-sm font-medium" }, label)))));
}
exports["default"] = Card;
