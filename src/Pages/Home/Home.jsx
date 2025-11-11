import React from "react";
import bannerImg from "../../assets/hero-banner1.jpg";
import books from "../../assets/good-books.png";
import { Link } from "react-router";

const Home = () => {
  return (
    <div>
      {/* banner  */}
      <div className="">
        <div className="relative bg-[#FED3D1] ">
         
          <div className=" flex items-center justify-center text-center ">
            <div className="space-y-4">
              <h1 className=" text-xl  lg:text-5xl my-heading ">
                Your Personal Library, Reimagined
              </h1>
              <div className="my-heading rounded-full  ">
                <p>Add, explore, and cherish every book that inspires you.</p>
                <p>
                  Discover new reads, share your favorites, and build your dream
                  collection.
                </p>
              </div>
              <img className="mx-auto border-2" src={books} alt="" />
            </div>
          </div>

          <div className=" bottom-5 left-5 ">
            <Link
              to={"/all-books"}
              className="btn rounded-full opacity-35 text-red-700"
            >
              All Books
            </Link>
            <Link to={"/my-books"} className="btn rounded-full opacity-35">
              My Books
            </Link>
          </div>
        </div>
      </div>
    </div>


  );
};

export default Home;
