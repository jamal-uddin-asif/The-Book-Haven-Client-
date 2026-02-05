import React from 'react';
import { BiSolidBookAdd } from "react-icons/bi";
import { FaBookOpenReader } from "react-icons/fa6";
import { MdAutoDelete } from "react-icons/md";
import { TiEdit } from "react-icons/ti";

const FeatureOfThisWeb = () => {
    const features = [
        { 
            icon: <FaBookOpenReader size={32} />, 
            title: "Read Books", 
            color: "text-emerald-500", 
            glow: "group-hover:shadow-emerald-500/20",
            border: "group-hover:border-emerald-500/50"
        },
        { 
            icon: <BiSolidBookAdd size={32} />, 
            title: "Add Books", 
            color: "text-blue-500", 
            glow: "group-hover:shadow-blue-500/20",
            border: "group-hover:border-blue-500/50"
        },
        { 
            icon: <TiEdit size={32} />, 
            title: "Edit Books", 
            color: "text-amber-500", 
            glow: "group-hover:shadow-amber-500/20",
            border: "group-hover:border-amber-500/50"
        },
        { 
            icon: <MdAutoDelete size={32} />, 
            title: "Delete Books", 
            color: "text-rose-500", 
            glow: "group-hover:shadow-rose-500/20",
            border: "group-hover:border-rose-500/50"
        },
    ];

    return (
        <div className="py-16">
            <div className="flex flex-col mb-12">
                <h2 className="text-3xl font-black text-slate-800 dark:text-white uppercase tracking-tighter">
                    Platform <span className="text-emerald-500">Capabilities</span>
                </h2>
                <div className="h-1.5 w-24 bg-emerald-500 mt-2 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((feature, index) => (
                    <div 
                        key={index}
                        className={`group relative overflow-hidden flex flex-col items-center p-10 rounded-[2rem] bg-white dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] ${feature.glow} ${feature.border} hover:-translate-y-2 cursor-pointer`}
                    >
                        {/* Interactive Background Shine */}
                        <div className="absolute -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white/20 opacity-40 group-hover:animate-shine" />

                        {/* Icon with Floating Animation */}
                        <div className={`${feature.color} mb-6 transition-all duration-500 transform group-hover:scale-125 group-hover:drop-shadow-[0_0_15px_rgba(0,0,0,0.1)]`}>
                            {feature.icon}
                        </div>

                        {/* Label */}
                        <h3 className="text-lg font-extrabold text-slate-700 dark:text-slate-200 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300">
                            {feature.title}
                        </h3>

                        {/* Hover Indicator Bar */}
                        <div className={`absolute bottom-0 left-0 w-0 h-1.5 bg-gradient-to-r from-transparent via-current to-transparent ${feature.color} group-hover:w-full transition-all duration-700`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeatureOfThisWeb;