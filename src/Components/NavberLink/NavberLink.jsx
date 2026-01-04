import React from "react";
import { NavLink } from "react-router";

const NavberLink = ({ to, children }) => {
  return (
    <li className="text-white">
      <NavLink className={({isActive})=> isActive && 'bg-white rounded-full font-bold text-blue-950'} to={to}>
      
      {children}
      </NavLink>
    </li>
  );
};

export default NavberLink;
