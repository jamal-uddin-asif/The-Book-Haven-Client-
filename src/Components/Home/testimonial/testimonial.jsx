import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

export const TestimonialsSection = () => {
  const testimonials = [
    { name: "Sarah J.", feedback: "Book Haven helped me discover amazing books I never knew existed!", role: "Verified Reader" },
    { name: "David K.", feedback: "The personalized recommendations are spot-on. I love it!", role: "Book Collector" },
    { name: "Mina L.", feedback: "A clean and easy-to-use platform for all book lovers.", role: "Library Member" },
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      {/* Updated Title Style */}
      <div className="mb-16">
        <h2 className="text-3xl font-black text-slate-800 dark:text-white uppercase tracking-tighter">
          Reader <span className="text-emerald-500">Experiences</span>
        </h2>
        <div className="h-1 w-12 bg-emerald-500 mt-2"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {testimonials.map((t, index) => (
          <div 
            key={index} 
            className="group relative bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 
                       transition-all duration-500 ease-out
                       hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:-translate-y-3"
          >
            {/* Emerald Accent on Hover */}
            <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-t-2xl"></div>

            <div className="flex items-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-emerald-500 text-sm" />
              ))}
            </div>

            <div className="relative">
              <FaQuoteLeft className="text-emerald-100 dark:text-slate-800 text-4xl absolute -top-4 -left-2 -z-0" />
              <p className="relative z-10 text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8">
                {t.feedback}
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center font-bold text-emerald-600">
                {t.name.charAt(0)}
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white leading-none">
                  {t.name}
                </h4>
                <span className="text-xs font-semibold text-emerald-600 uppercase tracking-widest mt-1 block">
                  {t.role}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};