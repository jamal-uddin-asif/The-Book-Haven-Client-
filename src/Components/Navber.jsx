import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import MyContainer from "./MyContainer/MyContainer";
import { useAuth } from "../Hooks/useAuth";
import toast from "react-hot-toast";
import { FaBookOpenReader, FaHouseChimney } from "react-icons/fa6";
import { SiWikibooks } from "react-icons/si";
import { BiSolidBookAdd } from "react-icons/bi";
import { TbInfoSquareRounded, TbLogout, TbDashboard } from "react-icons/tb";
import { HiOutlineDocumentText, HiOutlineMenuAlt1 } from "react-icons/hi";
import { BarLoader } from "react-spinners";
import { format } from "date-fns";
import Logo from "./Logo/Logo";
import NavberLink from "./NavberLink/NavberLink";

const Navber = () => {
  const { user, signOutUser, setLoading, loading } = useAuth();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleThemeToggle = (e) => {
    setTheme(e.target.checked ? "dark" : "light");
  };

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        toast.success("Signed out successfully");
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const links = (
    <>
      <NavberLink to={"/"}><FaHouseChimney className="text-lg" /> Home</NavberLink>
      <NavberLink to={"/all-books"}><SiWikibooks className="text-lg" /> All Books</NavberLink>
      <NavberLink to={"/terms"}><HiOutlineDocumentText className="text-lg" /> Terms</NavberLink>
      <NavberLink to={"/about-us"}><TbInfoSquareRounded className="text-lg" /> About</NavberLink>
      {user && (
        <>
          <NavberLink to={"/add-book"}><BiSolidBookAdd className="text-lg" /> Add Books</NavberLink>
          <NavberLink to={"/my-books"}><FaBookOpenReader className="text-lg" /> My Books</NavberLink>
        </>
      )}
    </>
  );

  return (
    <div className="sticky top-0 z-50 w-full transition-all duration-300 bg-blue-950/90 backdrop-blur-md border-b border-white/10 shadow-lg">
      <MyContainer>
        <div className="navbar px-0 py-3">
          {/* Mobile Menu & Logo */}
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white p-1 mr-2">
                <HiOutlineMenuAlt1 className="text-2xl" />
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow-2xl bg-slate-900 rounded-2xl w-64 border border-white/10 space-y-2">
                {links}
              </ul>
            </div>
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal gap-1 px-1 bg-white/5 rounded-full border border-white/10 py-1">
              {links}
            </ul>
          </div>

          {/* User Section */}
          <div className="navbar-end gap-4">
            {/* Theme Toggle Button */}
            <label className="swap swap-rotate text-white hover:text-emerald-400 transition-colors">
              <input type="checkbox" onChange={handleThemeToggle} checked={theme === "dark"} />
              {/* sun icon */}
              <svg className="swap-on fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
              {/* moon icon */}
              <svg className="swap-off fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.69Z" /></svg>
            </label>

            {loading ? (
              <BarLoader color="#34d399" width={60} />
            ) : user ? (
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar border-2 border-emerald-400/50 hover:border-emerald-400 transition-all">
                  <div className="w-10 rounded-full">
                    <img src={user?.photoURL || "https://img.icons8.com/ios/50/user-male-circle--v1.png"} alt="user" />
                  </div>
                </div>
                <ul tabIndex={0} className="mt-3 z-[1] p-4 shadow-2xl menu menu-sm dropdown-content bg-slate-900 rounded-2xl w-56 border border-white/10">
                  <div className="px-3 py-2 mb-2 border-b border-white/10">
                    <p className="text-white font-semibold truncate">{user?.displayName}</p>
                    <p className="text-slate-400 text-xs truncate">{user?.email}</p>
                  </div>
                  <li><Link to="/dashboard" className="py-2 flex items-center gap-2 text-white hover:bg-white/10 transition-all"><TbDashboard className="text-emerald-400 text-lg" /> Dashboard</Link></li>
                  <li><button onClick={handleSignOut} className="py-2 flex items-center gap-2 text-red-400 hover:bg-red-400/10 transition-all mt-1"><TbLogout className="text-lg" /> Logout</button></li>
                  <div className="mt-2 pt-2 border-t border-white/10 text-center text-[10px] text-slate-500 font-medium tracking-widest uppercase italic">
                    {format(new Date(), "MMM dd, yyyy")}
                  </div>
                </ul>
              </div>
            ) : (
              <div className="flex gap-2">
                <Link to="/auth/login" className="hidden sm:flex btn btn-ghost text-white btn-sm hover:bg-white/10">Login</Link>
                <Link to="/auth/register" className="btn btn-emerald bg-emerald-500 hover:bg-emerald-600 border-none text-blue-950 font-bold btn-sm rounded-lg shadow-lg shadow-emerald-500/20">Register</Link>
              </div>
            )}
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default Navber;