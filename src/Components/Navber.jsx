import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import MyContainer from "./MyContainer/MyContainer";
import { useAuth } from "../Hooks/useAuth";
import toast from "react-hot-toast";
import { FaBookOpenReader, FaHouseChimney } from "react-icons/fa6";
import { SiWikibooks } from "react-icons/si";
import { BiSolidBookAdd } from "react-icons/bi";
import { TbInfoSquareRounded, TbLogout } from "react-icons/tb";
import { IoIosLogIn } from "react-icons/io";
import { BarLoader } from "react-spinners";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { format } from "date-fns";
import { VscDebugBreakpointConditional } from "react-icons/vsc";
import { HiOutlineDocumentText } from "react-icons/hi";
import Logo from "./Logo/Logo";
import NavberLink from "./NavberLink/NavberLink";

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
    console.log(checked);
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
        <NavberLink to={"/"}>
          <FaHouseChimney />
          Home
        </NavberLink>
        <NavberLink to={"/all-books"}>
          <SiWikibooks />
          All Books
        </NavberLink>
        <NavberLink to={"/terms"}>
          <HiOutlineDocumentText />
          Terms
        </NavberLink>
        <NavberLink to={"/about-us"}>
          <TbInfoSquareRounded />
          About
        </NavberLink>
      {user && (
        <>
            <NavberLink to={"/add-book"}>
              <BiSolidBookAdd />
              Add Books
            </NavberLink>
            <NavberLink to={"/my-books"}>
              <FaBookOpenReader />
              My Books
            </NavberLink>
        </>
      )}
    </>
  );
  return (
    <div className=" bg-blue-950 ">
      <MyContainer>
        <div className=" navbar  ">
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
                className="menu menu-sm dropdown-content bg-blue-950/70 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {links}
              </ul>
            </div>

          <Logo/>

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
                  <div
                    id="hoverImg"
                    data-tooltip-id="hoverImg"
                    data-tooltip-content={user?.displayName}
                    className="flex gap-1"
                  >
                    <button
                      className="relative"
                      popoverTarget="popover-1"
                      style={
                        {
                          anchorName: "--anchor-1",
                        } /* as React.CSSProperties */
                      }
                    >
                      <Tooltip place="right" id="Asif" />
                      {user.photoURL ? (
                        <img
                          data-tooltip-id="Asif"
                          data-tooltip-content={user?.displayName}
                          className="h-10 w-10 z-10 rounded-full "
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
                      className="absolute bg-blue-200 z-10 top-1 -left-30 dropdown menu w-40 rounded-box dark:bg-base-100 shadow-sm"
                      popover="auto"
                      id="popover-1"
                      style={
                        {
                          positionAnchor: "--anchor-1",
                        } /* as React.CSSProperties */
                      }
                    >
                        <li>
                        <Link to={'/dashboard'} className="p-2 rounded-sm mb-2  bg-blue-950 text-[#FED3D1] shadow-sm shadow-blue-950 opacity-65 hover:bg-green-500">Dashboard</Link>
                        </li>
                      <li className="mb-2">
                        <button
                          onClick={handleSignOut}
                          className="p-2 rounded-sm   bg-blue-950 text-[#FED3D1]  shadow-sm shadow-blue-950 opacity-65 hover:bg-green-500  flex items-center space-x-1.5"
                        >
                          <span>Logout</span> <TbLogout />
                        </button>
                      </li>
                      <label className=" mr-1">Theme</label>
                      <input
                        onChange={(e) => handleThemeToggle(e.target.checked)}
                        type="checkbox"
                        checked={theme === "dark"}
                        className="toggle text-right"
                      />
                      <li className="">{format(new Date(), "dd/MM/YYY")}</li>
                    </ul>
                  </div>
                </>
              ) : loading ? (
                <BarLoader />
              ) : (
                <>
                  <div className="dropdown relative">
                    <div tabIndex={0} role="button" className="">
                      <img
                        className="bg-white rounded-full"
                        src="https://img.icons8.com/ios/50/user-male-circle--v1.png"
                        alt=""
                      />
                    </div>
                    <ul
                      tabIndex="-1"
                      className="absolute bg-blue-200 -left-40  dropdown-content menu dark:bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
                    >
                    
                      <li>
                        <Link
                          to={"/auth/login"}
                          className="p-2 rounded-sm mb-2  bg-blue-950 text-[#FED3D1] shadow-sm shadow-blue-950 opacity-65 hover:bg-green-500 "
                        >
                          Login
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={"/auth/register"}
                          className="p-2 rounded-sm   bg-blue-950 text-[#FED3D1] shadow-sm shadow-blue-950 opacity-65 hover:bg-green-500 "
                        >
                          Register
                        </Link>
                      </li>
                       <label className=" mr-1">Theme</label>
                      <input
                        onChange={(e) => handleThemeToggle(e.target.checked)}
                        type="checkbox"
                        checked={theme === "dark"}
                        className="toggle text-right"
                      />
                      
                    </ul>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default Navber;
