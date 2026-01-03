import React from "react";
import { NavLink } from "react-router";

const SideLink = ({ to, children }) => {
  return (
      <NavLink className={({isActive})=> `${isActive && 'bg-blue-900 text-white'} w-full py-3 px-2 rounded-xl block broder-2 border-white`} to={to}>
        {children}
      </NavLink>
  );
};
export default SideLink;
