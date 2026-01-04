import React from "react";
import { IoMenuSharp } from "react-icons/io5";
import { useAuth } from "../../../Hooks/useAuth";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router";
import { CgProfile } from "react-icons/cg";

const DashboardNavber = ({ SetSidebarOpen, sidebarOpen }) => {
  const { user } = useAuth();
  console.log(user);
  return (
    <div className="bg-white shadow dark:bg-base-200 p-3 flex justify-between items-center">
      <div className=" flex items-center gap-1 font-bold">
        <div onClick={() => SetSidebarOpen(!sidebarOpen)} className="md:hidden">
          <IoMenuSharp />
        </div>
        My Dashboard
      </div>

      <div className="flex relative gap-3">
        <div>
          <img className="h-12 w-12 rounded-full" src={user?.photoURL} alt="" />
        </div>
        <div>
          <h1 className="font-bold">{user.displayName}</h1>
          <p>user</p>
        </div>
        <div className="dropdown relative">
          <div tabIndex={0} role="button" className=" m-1">
          <FaAngleDown />
          </div>
          <ul
            tabIndex="-1"
            className="absolute bg-blue-50 dark:bg-base-200 -left-45 top-16 dropdown-content menu  rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li className="font-bold ">
             <Link to={'/dashboard/profile'}><CgProfile />Profile</Link>
            </li>

            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavber;
