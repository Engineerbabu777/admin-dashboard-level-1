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
var Button_1 = require("@/components/formControls/Button");
var Input_1 = require("@/components/formControls/Input");
var Select_1 = require("@/components/formControls/Select");
function Modal(_a) {
    var show = _a.show, title = _a.title, _b = _a.formControls, formControls = _b === void 0 ? [] : _b, onAdd = _a.onAdd, formData = _a.formData, setFormData = _a.setFormData, setShow = _a.setShow;
    return (React.createElement(React.Fragment, null, show ? (React.createElement(React.Fragment, null,
        React.createElement("div", { className: 'justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none' },
            React.createElement("div", { className: 'relative w-auto my-6 mx-auto max-w-3xl' },
                React.createElement("div", { className: 'border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none' },
                    React.createElement("div", { className: 'flex items-start justify-between p-5 border-b border-solid rounded-t border-slate-200' },
                        React.createElement("h3", { className: 'text-3xl font-semibold' }, title)),
                    React.createElement("div", { className: 'relative p-5 flex-auto flex flex-col gap-5' }, formControls && formControls.length
                        ? formControls.map(function (item) {
                            return item.componentType === 'input' ? (React.createElement(Input_1["default"], { key: item, type: item.type, placeholder: item.placeholder, label: item.label, value: formData && formData[item.id], onChange: function (e) {
                                    var _a;
                                    return setFormData(__assign(__assign({}, formData), (_a = {}, _a[item.id] = item.type === 'number'
                                        ? parseInt(e.target.value)
                                        : e.target.value, _a)));
                                } })) : item.componentType === 'select' ? (React.createElement(Select_1["default"], { value: formData && formData[item.id], onChange: function (e) {
                                    var _a;
                                    return setFormData(__assign(__assign({}, formData), (_a = {}, _a[item.id] = e.target.value, _a)));
                                }, label: item.label, options: item.options })) : null;
                        })
                        : null),
                    React.createElement("div", { className: 'flex gap-2 items-center justify-end p-6 border-t border-solid rounded-b' },
                        React.createElement(Button_1["default"], { text: 'Add', onClick: onAdd }),
                        React.createElement(Button_1["default"], { onClick: function () { return setShow(false); }, text: 'Close' }))))),
        React.createElement("div", { className: 'opacity-25 fixed inset-0 z-40 bg-black' }))) : null));
}
exports["default"] = Modal;
