import React from "react";
import { Link, NavLink } from "react-router";
import MyContainer from "./MyContainer/MyContainer";
import { useAuth } from "../Hooks/useAuth";
import toast from "react-hot-toast";
import { FaBookOpenReader, FaHouseChimney } from "react-icons/fa6";
import { SiWikibooks } from "react-icons/si";
import { BiSolidBookAdd } from "react-icons/bi";
import { TbLogout } from "react-icons/tb";
import { IoIosLogIn } from "react-icons/io";

const Navber = () => {
  const {user, signOutUser} = useAuth()

  const handleSignOut = () =>{
    signOutUser()
    .then(()=>{
      toast.success('SignOut successful')
    })
    .catch(err=>{
      console.log(err)
    })
  }

  const links = (
    <>
      <li>
        <NavLink to={"/"}><FaHouseChimney />Home</NavLink>
      </li>
      <li>
        <NavLink to={"/all-books"}><SiWikibooks />All Books</NavLink>
      </li>
      <li>
        <NavLink to={"/add-book"}><BiSolidBookAdd />Add Books</NavLink>
      </li>
      <li>
        <NavLink to={"/my-books"}><FaBookOpenReader />My Books</NavLink>
      </li>
    </>
  );
  return (
    <div className=" bg-[#FED3D1] ">
      {/* <MyContainer> */}
        <div className="md:max-w-11/12 mx-auto navbar   ">
          <div className="navbar-start">
            <div className="dropdown ">
              <div
                tabIndex={0}
                role="button"
                className=" lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {links}
              </ul>
            </div>
            <a className="my-heading font-bold md:text-xl">
              <span className="text-green-800">The </span>
              <span className="text-amber-600">Book </span>
              <span className="text-blue-600">Haven</span>
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-3 bg-white/25 rounded-full text-green-800">
              {links}
            </ul>
          </div>
          <div className="navbar-end">
            <div className="space-x-3">
              {
                user? <>
                <button onClick={handleSignOut} className="p-2 rounded-sm  bg-green-700 opacity-65 hover:bg-green-500 text-[#FED3D1] flex items-center space-x-1.5"><span>Logout</span> <TbLogout /></button>
                </>:
                <>
              <Link to={"/auth/login"} className="p-2 rounded-sm  bg-green-700 opacity-65 hover:bg-green-500 text-[#FED3D1]">
               Login
              </Link>
              <Link to={"/auth/register"} className="p-2 rounded-sm  bg-green-700 opacity-65 hover:bg-green-500 text-[#FED3D1]">
                Register
              </Link>
                
                </>
              }
            </div>
          </div>
        </div>
      {/* </MyContainer> */}
    </div>
  );
};

export default Navber;
