import React from "react";
import Logo from "../../Logo/Logo";
import { IoMenuSharp } from "react-icons/io5";
import { Link, NavLink } from "react-router";
import SideLink from "../SideLink/SideLink";
import { useAuth } from "../../../Hooks/useAuth";
import { FaAngleDown } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";

const Sidebar = ({ SetSidebarOpen, sidebarOpen }) => {
  const { user } = useAuth();
  return (
    <div
      className={`shadow-2xl p-5 lg:w-64 bg-white dark:bg-base-300 h-full min-h-screen absolute md:static ${
        sidebarOpen ? "left-0 duration-100 fixed" : "-left-70 duration-100"
      } `}
    >
      <div className="flex justify-between items-center gap-10">
        <div>
          <Logo />
        </div>

        <div className="md:hidden">
          <div onClick={() => SetSidebarOpen(!sidebarOpen)} className="">
            {sidebarOpen ? "x" : <IoMenuSharp size={30} />}
          </div>
        </div>
      </div>

      <div className="flex my-6 p-2 bg-blue-100 dark:bg-base-100 rounded-xl relative gap-3">
        <div>
          <img className="h-12 rounded-full" src={user?.photoURL} alt="" />
        </div>
        <div>
          <h1 className="font-bold">{user.displayName}</h1>
          <p>user</p>
        </div>
      </div>

      <div>
        <ul>
          <li>
            <SideLink to={"/dashboard"}>Overview</SideLink>
          </li>
          <li>
            <SideLink to={"/dashboard/add-book"}>Add book</SideLink>
          </li>
          <li>
            <SideLink to={"/dashboard/my-books"}>My books</SideLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
