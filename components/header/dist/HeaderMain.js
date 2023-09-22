'use client';
"use strict";
exports.__esModule = true;
var index_1 = require("@/context/index");
var react_1 = require("next-auth/react");
var navigation_1 = require("next/navigation");
var react_2 = require("react");
function Header() {
    var _a = react_2.useContext(index_1.GlobalContext), sideBarOpen = _a.sideBarOpen, setSideBarOpen = _a.setSideBarOpen;
    var status = react_1.useSession().status;
    var router = navigation_1.useRouter();
    console.log(status);
    react_2.useEffect(function () {
        if (status === "authenticated")
            router.push("/");
    }, [status]);
    return (React.createElement("header", { className: "sticky top-0 z-999 flex w-full bg-white drop-shadow" },
        React.createElement("div", { className: "flex flex-grow items-center gap-2 justify-end py-4 px-4 shadow md:px-6 2xl:px-11" },
            React.createElement("div", { className: "flex items-center gap-2 sm:gap-4 lg:hidden" },
                React.createElement("button", { className: "inline-flex items-center justify-center bg-black px-6 py-2 text-lg text-white font-medium tracking-wide uppercase" }, sideBarOpen ? "Hide Sidebar" : "Show Sidebar")),
            React.createElement("button", { onClick: function () {
                    return status === "authenticated" ? react_1.signOut() : react_1.signIn("google");
                }, className: "inline-flex items-center justify-center bg-black px-6 py-2 text-lg text-white font-medium tracking-wide uppercase" }, status === "authenticated" ? "Logout" : "Login"))));
}
exports["default"] = Header;
