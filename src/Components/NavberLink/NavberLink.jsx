import React from "react";
import { NavLink } from "react-router";

const NavberLink = ({ to, icon }) => {
  return (
    <li className="text-white">
      <NavLink className={({isActive})=> isActive && 'bg-white rounded-full font-bold text-blue-950'} to={to}>
        {icon}
        My Books
      </NavLink>
    </li>
  );
};

export default NavberLink;
