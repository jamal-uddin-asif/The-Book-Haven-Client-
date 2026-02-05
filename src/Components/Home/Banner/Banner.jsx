import React from "react";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div className="relative  banner mb-5  text-white ">
      <div className="  md:flex py-15  items-center justify-center text-center ">
        <div
          data-aos="fade-up"
          data-aos-duration='1000'
          className="space-y-4 bg-white/20 rounded-xl p-2"
        >
          <h1 className="tracking-wide text-3xl  bg-blue-950 p-2 rounded-xl font-bold  md:text-4xl  lg:text-5xl my-heading ">
            Your Personal Library, Reimagined
          </h1>
          <div className="my-heading rounded-full tracking-wider mb-4  ">
            <p>Add, explore, and cherish every book that inspires you.</p>
            <p>
              Discover new reads, share your favorites, and build your dream
              collection.
            </p>
          </div>
        </div>
      </div>

      <div
        data-aos="fade-up"
        className="flex justify-center items-center bottom-5 left-5 space-x-2 "
      >
        <Link
          to={"/all-books"}
          className=" p-2 rounded-sm  bg-blue-950 text-white shadow-xl shadow-blue-900  hover:bg-blue-800"
        >
          All Books
        </Link>
        <Link
          to={"/add-book"}
          className=" p-2 rounded-sm  bg-blue-950 text-white shadow-xl shadow-blue-900 hover:bg-blue-800 "
        >
          Create Book
        </Link>
      </div>
    </div>
  );
};

export default Banner;
