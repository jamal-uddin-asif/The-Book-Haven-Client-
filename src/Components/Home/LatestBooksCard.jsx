import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router";

const LatestBooksCard = ({ book }) => {
  return (
    <div className="flex bg-white  flex-col h-full relative overflow-hidden border-l-2 rounded-2xl transition duration-200 hover:border-green-400">

      {/* Image + Title */}
      <div className="border-b-2 hover:border-green-400">
        <img
          className="h-[150px] mx-auto pl-3 hover:scale-110 transition"
          src={book.coverImage}
          alt=""
        />
        <h1 className="pl-3 my-heading font-bold line-clamp-2">
          {book.title}
        </h1>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 space-y-2 pl-3 pt-2">
        <h2 className="my-heading">
          <span className="bg-fuchsia-400 px-1 rounded-sm">Author</span> : {book.author}
        </h2>

        <p className="my-heading">
          <span className="bg-cyan-500 px-1 rounded-sm">Genre</span> : {book.genre}
        </p>

        <p className="line-clamp-2 my-heading">
          <span className="bg-emerald-400 rounded-sm px-1">Summary</span> : {book.summary}
        </p>

          <div className="bg-amber-300 px-2 text-green-700 rounded-sm w-fit mb-2">
            Rating: {book.rating}
          </div>
        {/* Footer */}
        <div className="mt-auto">

          <Link
            to={`/book-details/${book._id}`}
            className="block p-2.5 rounded-sm bg-blue-950  hover:opacity-65 text-white text-center"
          >
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};


export default LatestBooksCard;
