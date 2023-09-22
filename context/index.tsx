"use client";

import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

type Props = {
	children: React.ReactNode;
};
export default function GlobalContextProvider({ children }: Props) {

    const [sideBarOpen , setSideBarOpen] = useState(false);
	return (<GlobalContext.Provider value={{sideBarOpen,setSideBarOpen}}>
        {children}
    </GlobalContext.Provider>);
}
