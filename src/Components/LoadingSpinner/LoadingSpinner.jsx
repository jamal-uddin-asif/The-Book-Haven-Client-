import React from 'react';
import { SyncLoader } from 'react-spinners';

const LoadingSpinner = () => {
    return (
        <div className="relative flex flex-col justify-center items-center min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-500 overflow-hidden">
            
            {/* Background Soft Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full blur-[100px]"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-[120px] delay-700"></div>

            <div className="relative flex flex-col items-center gap-6">
                {/* Logo Section with subtle floating animation */}
                <div className="flex flex-col items-center animate-bounce duration-[2000ms]">
                    <img
                        className="w-16 h-16 md:w-20 md:h-20 drop-shadow-lg"
                        src="https://img.icons8.com/plasticine/100/book.png"
                        alt="The Book Haven Logo"
                    />
                    <div className="mt-2 font-bold text-2xl md:text-3xl tracking-tight">
                        <span className="text-emerald-500">H</span>
                        <span className="text-slate-800 dark:text-gray-200">aven</span>
                    </div>
                </div>

                {/* Loader & Status Text Container */}
                <div className="flex flex-col items-center bg-white/30 dark:bg-slate-800/30 backdrop-blur-sm px-8 py-6 rounded-2xl border border-white/20 dark:border-slate-700/30 shadow-xl">
                    <SyncLoader 
                        color="#10b981" // Emerald color matching your logo 'H'
                        size={10} 
                        margin={3}
                        speedMultiplier={0.6}
                    />
                    
                    <p className="mt-4 text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-[0.3em] animate-pulse">
                        Opening the world of books
                    </p>
                </div>
            </div>

            {/* Bottom Credit (Optional) */}
            <div className="absolute bottom-8 text-slate-400 dark:text-slate-600 text-xs font-medium uppercase tracking-widest">
                The Book Haven
            </div>
        </div>
    );
};

export default LoadingSpinner;