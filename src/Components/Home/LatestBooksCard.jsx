import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router";

const LatestBooksCard = ({ book }) => {
  return (
    <div className="flex flex-col border-l-2 hover:border-l-5 hover:text-white rounded-2xl hover:scale-110 duration-200 transition ease-in-out hover:border-green-400 hover:bg-blue-950 ">
      <div className="flex-1 border-b-2 hover:border-green-400 ">
        <img
          className="h-[150px] pl-3 hover:scale-110 transition ease-in-out"
          src={book.coverImage}
          alt=""
        />
        <h1 className="pl-3 my-heading font-bold text-xl">{book.title}</h1>
      </div>

      <div className="flex-1  space-y-2 pl-3 pt-2">
        <h2 className="my-heading"><span className="bg-fuchsia-400 px-1 rounded-sm">Author</span> : {book.author}</h2>
        <p className="my-heading"><span className="bg-cyan-500 px-1 rounded-sm">Genre</span> : {book.genre}</p>
        <p className="line-clamp-2 my-heading"><span className="bg-emerald-400 rounded-sm px-1">Summary</span> : {book.summary}</p>
        <div className="flex flex-col ">
          <div className="bg-amber-300 px-2 text-green-700 rounded-sm inline ">
            {" "}
            Rating: {book.rating}
          </div>

          <Link
            to={`/book-details/${book._id}`}
            className="p-2.5 my-2 rounded-sm  bg-blue-950 opacity-65 hover:bg-green-500 text-white"
          >
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LatestBooksCard;
