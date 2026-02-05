import React from "react";
import {
  HiSparkles,
  HiBookOpen,
  HiMagnifyingGlass,
  HiSquares2X2,
  HiChevronRight,
} from "react-icons/hi2";

const categories = [
  {
    name: "Fantasy",
    icon: <HiSparkles />,
    color: "text-purple-500",
    border: "hover:border-purple-200",
  },
  {
    name: "Non-Fiction",
    icon: <HiBookOpen />,
    color: "text-blue-500",
    border: "hover:border-blue-200",
  },
  {
    name: "Mystery",
    icon: <HiMagnifyingGlass />,
    color: "text-rose-500",
    border: "hover:border-rose-200",
  },
  {
    name: "Other",
    icon: <HiSquares2X2 />,
    color: "text-emerald-500",
    border: "hover:border-emerald-200",
  },
];
export const CategoriesSection = () => {

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      {/* Signature Title */}
      <div className="mb-14">
        <h2 className="text-3xl font-black text-slate-800 dark:text-white uppercase tracking-tighter">
          Browse <span className="text-emerald-500">Categories</span>
        </h2>
        <div className="h-1.5 w-12 bg-emerald-500 mt-2 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((cat, index) => (
          <div
            key={index}
            className={`group cursor-pointer relative p-10 rounded-3xl 
                       bg-white dark:bg-slate-900 
             
                       border border-slate-200 dark:border-slate-800 
                     
                       shadow-[0_4px_12px_rgba(0,0,0,0.03)] 
                       transition-all duration-500 ease-out
                      
                       hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] 
                       hover:-translate-y-2 hover:bg-slate-50/50 
                       dark:hover:bg-slate-800/50 ${cat.border}`}
          >
            <div className="relative z-10 flex flex-col items-center text-center">
              {/* Icon Container with subtle glass effect */}
              <div
                className={`text-4xl mb-5 p-4 rounded-2xl bg-white dark:bg-slate-800 
                              shadow-sm border border-slate-100 dark:border-slate-700
                              transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 ${cat.color}`}
              >
                {cat.icon}
              </div>

              <h3 className="text-xl font-bold text-slate-800 dark:text-white tracking-tight">
                {cat.name}
              </h3>

              {/* Interaction Hint */}
              <div className="mt-4 flex items-center gap-1 text-emerald-500 font-bold opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <span className="text-[10px] uppercase tracking-[0.2em]">
                  View Books
                </span>
                <HiChevronRight size={14} />
              </div>
            </div>

            {/* Subtle Gradient Accent at bottom */}
            <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        ))}
      </div>
    </section>
  );
};
