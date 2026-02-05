import React from "react";
import { HiOutlineLibrary, HiOutlineSparkles, HiOutlineCloudDownload, HiOutlineChatAlt2 } from "react-icons/hi";

const features = [
  { 
    title: "Vast Library", 
    desc: "Over 50 books from fiction to non-fiction, curated for excellence.", 
    icon: <HiOutlineLibrary className="text-3xl" />,
    color: "from-blue-500 to-cyan-400"
  },
  { 
    title: "Smart Recommendations", 
    desc: "Books tailored to your taste using our personalized discovery engine.", 
    icon: <HiOutlineSparkles className="text-3xl" />,
    color: "from-emerald-500 to-teal-400"
  },
  { 
    title: "Offline Access", 
    desc: "Download your favorites and enjoy uninterrupted reading anywhere.", 
    icon: <HiOutlineCloudDownload className="text-3xl" />,
    color: "from-amber-500 to-orange-400"
  },
  { 
    title: "Reader Community", 
    desc: "Engage with other book lovers and see honest reviews before choosing.", 
    icon: <HiOutlineChatAlt2 className="text-3xl" />,
    color: "from-purple-500 to-pink-400"
  },
];
export const FeaturesSection = () => {

  return (
    <section className="py-24 md:px-6 px-2 relative overflow-hidden">
      {/* Section Header */}
      <div className="relative z-10 mb-16 text-center md:text-left">
        <span className="text-emerald-500 font-bold tracking-[0.2em] uppercase text-xs">Why Choose Us</span>
        <h2 className="text-3xl md:text-5xl font-black text-slate-800 dark:text-white mt-2">
          Experience the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">Next Level</span> of Reading
        </h2>
        <div className="w-20 h-1.5 bg-emerald-500 mt-4 rounded-full"></div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="group relative p-8 bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-xl shadow-slate-200/50 dark:shadow-none transition-all duration-500 hover:-translate-y-3"
          >
            {/* Background Gradient Blur on Hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>

            {/* Icon Container */}
            <div className={`w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br ${feature.color} text-white shadow-lg transform transition-transform duration-500 group-hover:rotate-[10deg]`}>
              {feature.icon}
            </div>

            {/* Content */}
            <div className="mt-8 relative z-10">
              <h3 className="font-bold text-xl text-slate-800 dark:text-slate-100 mb-3 group-hover:text-emerald-500 transition-colors">
                {feature.title}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>

            {/* Bottom Accent Line */}
            <div className={`absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r ${feature.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-t-full`}></div>
          </div>
        ))}
      </div>
    </section>
  );
};