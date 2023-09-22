"use strict";
exports.__esModule = true;
function Select(_a) {
    var label = _a.label, value = _a.value, onChange = _a.onChange, _b = _a.options, options = _b === void 0 ? [] : _b;
    return (React.createElement("div", { className: "relative" },
        React.createElement("p", { className: "pt-0 pr-2 pb-0 pl-2 absolute -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 bg-white" }, label),
        React.createElement("select", { className: "border placeholder-gray-400 focus:outline-none w-full p-4 m-0 text-base block bg-white rounded-md", value: value, onChange: onChange },
            React.createElement("option", { id: "", value: "" }, "Select"),
            options && options.length
                ? options.map(function (item) { return (React.createElement("option", { id: item.id, key: item.id, value: item.id }, item.label)); })
                : null)));
}
exports["default"] = Select;
