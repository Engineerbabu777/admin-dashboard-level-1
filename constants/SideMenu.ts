
import React from 'react';
import {LuLayoutDashboard} from 'react-icons/lu';
import {TbBrandProducthunt} from 'react-icons/tb';
import {PiUsersFourLight} from 'react-icons/pi';

export const menuItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      path: "/",
      icon: React.createElement(LuLayoutDashboard,{size:25}),
    },
    {
      id: "products",
      label: "Products",
      path: "/products",
      icon: React.createElement(TbBrandProducthunt,{size:25}),
    },
    {
      id: "visitors",
      label: "Visitors",
      path: "/visitors",
      icon: React.createElement(PiUsersFourLight,{size:25}),
    },
  ]