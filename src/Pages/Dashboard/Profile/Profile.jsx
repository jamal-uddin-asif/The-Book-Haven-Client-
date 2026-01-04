import React, { useContext, useEffect } from "react";
import { Link, Outlet } from "react-router";
import { CiUser } from "react-icons/ci";
import { GrUpdate } from "react-icons/gr";
import { IoLogOutOutline } from "react-icons/io5";
import { toast } from "react-toastify";
import { useAuth } from "../../../Hooks/useAuth";
import MyContainer from "../../../Components/MyContainer/MyContainer";

const Profile = () => {
  const { user, signOutUser } = useAuth();

  // console.log(user);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSignOut = () => {
    signOutUser().then(() => {
      toast.success("Log Out Successful");
    });
  };
  return (
    <div>
      <MyContainer
        className={
          "md:flex p-4  justify-center items-center gap-10 min-h-[80vh] "
        }
      >
        <div className="py-7  flex-2 md:py-25 md:px-17 rounded-2xl p-4  shadow-2xl ">
          <div className="mx-auto">
            {user?.photoURL !== null ? (
              <img
                className="rounded-full mx-auto w-40 h-40"
                src={user?.photoURL}
                alt=""
              />
            ) : (
              <img
                className="mx-auto"
                width="70"
                height="70"
                src="https://img.icons8.com/ios-filled/50/user.png"
                alt="user"
              />
            )}
          </div>
          <h1 className="text-2xl my-2 text-white text-center font-semibold ">
            {user?.displayName}
          </h1>
          <hr />
          <div className="text-white py-4 ">
            <div>
              <Link to="/dashboard/profile">
                <button className="btn  w-full mb-2 bg-blue-950 text-white">
                  <CiUser size={25} />
                  Account Details
                </button>
              </Link>
            </div>
            <div>
              <Link to={"/dashboard/profile/updateProfile"}>
                <button className="btn w-full mb-2 bg-blue-950 text-white">
                  <GrUpdate size={18} /> Update profile
                </button>
              </Link>
            </div>
          </div>
          <hr />
          <div className="text-center py-4 text-gray-400">
            <div>
              <button
                onClick={handleSignOut}
                className="btn w-full mb-2 bg-blue-950 text-white"
              >
                <IoLogOutOutline size={26} />
                Log Out
              </button>
            </div>
          </div>
        </div>
        <div className="flex-3">
          <Outlet></Outlet>
        </div>
      </MyContainer>
    </div>
  );
};

export default Profile;
