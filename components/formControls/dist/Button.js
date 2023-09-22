"use strict";
exports.__esModule = true;
function Button(_a) {
    var text = _a.text, onClick = _a.onClick;
    return (React.createElement("button", { type: "button", className: "inline-flex items-center justify-center bg-black px-6 py-2 text-lg text-white font-medium uppercase tracking-wide", onClick: onClick }, text));
}
exports["default"] = Button;
