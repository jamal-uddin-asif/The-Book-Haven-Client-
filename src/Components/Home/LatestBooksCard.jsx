import React from "react";
import { FaArrowRightLong, FaStar } from "react-icons/fa6";
import { MdCategory } from "react-icons/md";
import { Link } from "react-router";

const LatestBooksCard = ({ book }) => {
  return (
    <div className="group relative flex flex-col h-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:border-emerald-500/50 hover:-translate-y-2">
      
      {/* Image Section */}
      <div className="relative h-56 overflow-hidden bg-slate-100 dark:bg-slate-900">
        <img
          className="w-full h-full object-contain p-4 transform transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
          src={book.coverImage}
          alt={book.title}
        />
        {/* Rating Badge Overlay */}
        <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md px-2 py-1 rounded-lg shadow-sm border border-slate-200 dark:border-slate-600">
          <FaStar className="text-amber-400 text-sm" />
          <span className="text-xs font-bold text-slate-700 dark:text-slate-200">{book.rating}</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-1 p-5">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="flex items-center gap-1 text-[10px] uppercase tracking-wider font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 px-2 py-0.5 rounded-md">
              <MdCategory className="text-xs" />
              {book.genre}
            </span>
          </div>
          
          <h1 className="text-lg font-bold text-slate-800 dark:text-slate-100 line-clamp-1 group-hover:text-emerald-500 transition-colors">
            {book.title}
          </h1>
          
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed italic">
            "{book.summary}"
          </p>
        </div>

        {/* Footer Button */}
        <div className="mt-5">
          <Link
            to={`/book-details/${book._id}`}
            className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-slate-900 dark:bg-blue-600 hover:bg-blue-800 dark:hover:bg-blue-800 text-white text-sm font-semibold transition-all duration-300 shadow-md active:scale-95"
          >
            See Details
            <FaArrowRightLong className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LatestBooksCard;