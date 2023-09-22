"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var SideMenu_1 = require("@/constants/SideMenu");
var context_1 = require("@/context");
var link_1 = require("next/link");
var navigation_1 = require("next/navigation");
function SidebarMain(_a) {
    var _b = react_1.useContext(context_1.GlobalContext), sideBarOpen = _b.sideBarOpen, setSideBarOpen = _b.setSideBarOpen;
    var pathName = navigation_1.usePathname();
    var router = navigation_1.useRouter();
    var handlenavigate = function (getMenuItem) {
        if (status === 'unauthenticated') {
            router.push('/unauth-page');
            return;
        }
        router.push(getMenuItem.path);
    };
    return (react_1["default"].createElement("aside", { className: " left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear lg:static lg:translate-x-0\n      " + (sideBarOpen ? " -translate-x-full " : "  translate-x-0 ") + "\n      " },
        react_1["default"].createElement("div", { className: "flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5" },
            react_1["default"].createElement(link_1["default"], { href: "/", className: "text-[40px] text-white" }, "Analytics")),
        react_1["default"].createElement("div", { className: "flex flex-col overflow-y-auto duration-300 ease-linear" },
            react_1["default"].createElement("nav", { className: "mt-5 py-4 px-4 lg:mt-9 lg:px-6" },
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("ul", { className: "mb-6 flex flex-col gap-1.5" }, SideMenu_1.menuItems.map(function (menuItem) { return (react_1["default"].createElement("li", { key: menuItem.id },
                        react_1["default"].createElement("label", { onClick: function () { return handlenavigate(menuItem); }, className: "group relative cursor-pointer flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark \n                               " + (pathName.includes(menuItem.id) && "bg-graydark") + "\n                              " },
                            menuItem.icon,
                            menuItem.label))); })))))));
}
exports["default"] = SidebarMain;
