import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import MyContainer from "./MyContainer/MyContainer";
import { useAuth } from "../Hooks/useAuth";
import toast from "react-hot-toast";
import { FaBookOpenReader, FaHouseChimney } from "react-icons/fa6";
import { SiWikibooks } from "react-icons/si";
import { BiSolidBookAdd } from "react-icons/bi";
import { TbLogout } from "react-icons/tb";
import { IoIosLogIn } from "react-icons/io";
import { BarLoader } from "react-spinners";
import { Tooltip } from "react-tooltip";
import 'react-tooltip/dist/react-tooltip.css'
import { format } from "date-fns";




const Navber = () => {
  const { user, signOutUser, setLoading, loading } = useAuth();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  // console.log(user);

  

  // Theme toggle

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  const handleThemeToggle = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        toast.success("SignOut successful");
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const links = (
    <>
      <li className="text-white">
        <NavLink to={"/"}>
          <FaHouseChimney />
          Home
        </NavLink>
      </li>
      <li className="text-white">
        <NavLink to={"/all-books"}>
          <SiWikibooks />
          All Books
        </NavLink>
      </li>
      {user && (
        <>
          <li className="text-white">
            <NavLink to={"/add-book"}>
              <BiSolidBookAdd />
              Add Books
            </NavLink>
          </li>
          <li className="text-white">
            <NavLink to={"/my-books"}>
              <FaBookOpenReader />
              My Books
            </NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className=" bg-blue-950/70">
      
      {/* <MyContainer> */}
      <div className="md:max-w-11/12 mx-auto navbar   ">
        <div className="navbar-start">
          <div className="dropdown ">
            <div tabIndex={0} role="button" className=" lg:hidden">
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
          <a className="my-heading flex items-center font-bold md:text-xl">
            {/* <span className="text-green-800">The </span>
            <span className="text-amber-600">Book </span> */}
            <img
              className="w-10 h-10"
              src="https://img.icons8.com/plasticine/100/book.png"
              alt=""
            />
            <div className="text-gray-300">
              <span className="text-2xl text-emerald-400">H</span>aven
            </div>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-3 bg-white/25 rounded-full text-green-800">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          
          <div className="space-x-3">
            {user ? (
              <>
              
                <div id="hoverImg"  data-tooltip-id="hoverImg" data-tooltip-content={user?.displayName} className="flex gap-1">
                  <button
                    className=""
                    popoverTarget="popover-1"
                    style={
                      { anchorName: "--anchor-1" } /* as React.CSSProperties */
                    }
                  >
                    <Tooltip id="Asif" />
                    {user.photoURL ? (
                      
                      <img
                         data-tooltip-id="Asif"
                         data-tooltip-content={user?.displayName}
                        className="h-10 w-10 rounded-full "
                        src={user?.photoURL}
                        alt={user.displayName}
                      />
                      
                    ) : (
                      <img
                        className="h-10 rounded-full "
                        src="https://img.icons8.com/ios/50/user-male-circle--v1.png"
                        alt=""
                      />
                    )}
                  </button>

                  <ul
                    className="dropdown menu w-60 rounded-box bg-base-100 shadow-sm"
                    popover="auto"
                    id="popover-1"
                    style={
                      {
                        positionAnchor: "--anchor-1",
                      } /* as React.CSSProperties */
                    }
                  >
                    <li className="mb-2">
                      <button
                        onClick={handleSignOut}
                        className="p-2 rounded-sm   bg-blue-950 text-[#FED3D1] shadow-sm shadow-blue-950 opacity-65 hover:bg-green-500  flex items-center space-x-1.5"
                      >
                        <span>Logout</span> <TbLogout />
                      </button>
                    </li>
                    <label className="text-neutral-600 mr-1">Theme</label>
                    <input
                      onChange={(e) => handleThemeToggle(e.target.checked)}
                      type="checkbox"
                      defaultChecked
                      className="toggle text-right"
                    />
                    <li className="">{format(new Date(), "dd/mm/yyy")}</li>
                  </ul>
                </div>
              </>
            ) : loading ? (
              <BarLoader />
            ) : (
              <>
                <Link
                  to={"/auth/login"}
                  className="p-2 rounded-sm   bg-blue-950 text-[#FED3D1] shadow-sm shadow-blue-950 opacity-65 hover:bg-green-500 "
                >
                  Login
                </Link>
                <Link
                  to={"/auth/register"}
                  className="p-2 rounded-sm   bg-blue-950 text-[#FED3D1] shadow-sm shadow-blue-950 opacity-65 hover:bg-green-500 "
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
      {/* </MyContainer> */}
    </div>
  );
};

export default Navber;
