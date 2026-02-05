import { useEffect, useState } from "react";
import MyContainer from "../../MyContainer/MyContainer";
import { useAxiosSecure } from "../../../Hooks/useAxiosSecure";
// Icons add a lot of professional weight to stats
import { HiOutlineClock, HiOutlineUsers, HiOutlinePencilSquare, HiOutlineChatBubbleBottomCenterText } from "react-icons/hi2";

export const HighlightsSection = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure.get("/all-books").then((data) => {
      setBooks(data.data);
      setLoading(false);
    });
  }, [axiosSecure]);

  const highlights = [
    { number: "24/7", label: "Available", icon: <HiOutlineClock /> },
    { number: "100+", label: "Active Readers", icon: <HiOutlineUsers /> },
    { number: "50+", label: "Authors Featured", icon: <HiOutlinePencilSquare /> },
    { number: "1k+", label: "Monthly Reviews", icon: <HiOutlineChatBubbleBottomCenterText /> },
  ];

  return (
    <section className="py-18 md:px-6 px-2 bg-white dark:bg-slate-950 border-y border-slate-100 dark:border-slate-900">
      <MyContainer>
        {/* Title following your signature design pattern */}
        <div className="mb-16 text-left">
          <h2 className="text-3xl font-black text-slate-800 dark:text-white uppercase tracking-tighter">
            Why <span className="text-emerald-500">Book Haven?</span>
          </h2>
          <div className="h-1.5 w-12 bg-emerald-500 mt-2 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <div 
              key={index} 
              className="group relative p-8 rounded-3xl border border-transparent transition-all duration-500 hover:bg-slate-50 dark:hover:bg-slate-900/50 hover:border-slate-200 dark:hover:border-slate-800"
            >
              {/* Background Glow Effect on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl bg-emerald-500/5 -z-10"></div>

              <div className="flex flex-col items-center lg:items-start">
                {/* Icon Circle */}
                <div className="text-2xl mb-4 p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-12">
                  {item.icon}
                </div>

                <h3 className="text-4xl font-black text-slate-900 dark:text-white tracking-tighter transition-all duration-300 group-hover:text-emerald-500">
                  {item.number}
                </h3>
                
                <p className="text-sm font-bold uppercase tracking-[0.15em] text-slate-400 dark:text-slate-500 mt-2">
                  {item.label}
                </p>

                {/* Decorative underline that expands */}
                <div className="w-6 h-1 bg-slate-200 dark:bg-slate-800 mt-4 rounded-full transition-all duration-500 group-hover:w-full group-hover:bg-emerald-500/30"></div>
              </div>
            </div>
          ))}
        </div>
      </MyContainer>
    </section>
  );
};