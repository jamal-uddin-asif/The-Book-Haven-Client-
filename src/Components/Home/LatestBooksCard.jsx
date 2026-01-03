import React from "react";
import { FaArrowRightLong, FaStar } from "react-icons/fa6";
import { MdCategory, MdSummarize } from "react-icons/md";
import { Link } from "react-router";

const LatestBooksCard = ({ book }) => {
  return (
    <div className="flex hover:bg-base-300  flex-col h-full relative overflow-hidden border-l-2 rounded-2xl transition duration-200 hover:border-green-400">
      {/* Image + Title */}
      <div className="border-b-2 hover:border-green-400">
        <img
          className="h-[150px] mx-auto pl-3 hover:scale-110 transition"
          src={book.coverImage}
          alt=""
        />
        <h1 className="pl-3 my-heading font-bold line-clamp-2">{book.title}</h1>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 space-y-2 pl-3 pt-2">
        <div className="line-clamp-2 my-heading ">
          <p>{book.summary}</p>
        </div>

        <div className="flex items-center justify-between ">
          <div className="my-heading flex items-center">
            <span className=" mr-2">
              <MdCategory />
            </span>{" "}
            {book.genre}
          </div>

          <div className=" flex  items-center gap-1 px-2 text-green-700 rounded-sm w-fit ">
            <p>
              <FaStar color="gold" />
            </p>
            {book.rating}
          </div>
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
