"use strict";
exports.__esModule = true;
function Input(_a) {
    var label = _a.label, placeholder = _a.placeholder, onChange = _a.onChange, value = _a.value, type = _a.type;
    return (React.createElement("div", { className: "relative" },
        React.createElement("p", { className: "pt-0 pr-2 pb-0 pl-2 absolute -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 bg-white" }, label),
        React.createElement("input", { placeholder: placeholder, type: type || "text", value: value, onChange: onChange, className: "border placeholder-gray-400 focus:outline-none w-full p-4 m-0 text-base block bg-white rounded-md" })));
}
exports["default"] = Input;
