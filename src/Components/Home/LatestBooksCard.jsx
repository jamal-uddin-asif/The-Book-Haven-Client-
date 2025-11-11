import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router";

const LatestBooksCard = ({ book }) => {
  return (
    <div className="border-l-2 hover:border-l-5 hover:text-white rounded-2xl hover:scale-110 duration-200 transition ease-in-out hover:border-green-400 hover:bg-blue-950 ">
      <div className="border-b-2 hover:border-green-400 ">
        <img
          className="h-[150px] pl-3 hover:scale-110 transition ease-in-out"
          src={book.coverImage}
          alt=""
        />
        <h1 className="pl-3 my-heading font-bold text-xl">{book.title}</h1>
      </div>

      <div className=" space-y-2 pl-3 pt-2">
        <h2 className="my-heading">Author : {book.author}</h2>
        <p className="my-heading">Genre : {book.genre}</p>
        <p className="line-clamp-2 my-heading">Summary : {book.summary}</p>
        <div className="flex flex-col ">
          <div className="bg-amber-300 px-2 text-green-700 rounded-sm inline ">
            {" "}
            Rating: {book.rating}
          </div>

          <Link
            to={`/book-details/${book._id}`}
            className="px-2.5 my-2 rounded-sm  bg-green-700 opacity-65 hover:bg-green-500 text-[#FED3D1]"
          >
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LatestBooksCard;
