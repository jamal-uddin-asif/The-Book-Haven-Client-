import React from "react";
import { NavLink } from "react-router";

const SideLink = ({ to, children, className,   end = false}) => {
  return (
      <NavLink end={end} className={({isActive})=> `${isActive && 'bg-blue-900 text-white'} ${className} w-full py-3 px-2 rounded-sm block broder-2 border-white`} to={to}>
        {children}
      </NavLink>
  );
};
export default SideLink;
