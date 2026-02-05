import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { HiHome } from "react-icons/hi2";

const PageNotFound = () => {
  return (
    <div className='bg-white dark:bg-slate-950 flex flex-col justify-center items-center min-h-screen px-6 text-center overflow-hidden relative transition-colors duration-500'>
      
      {/* Background Decorative Glow - Adjusts opacity based on mode */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full blur-[120px] -z-0"></div>

      <div className="relative z-10">
        {/* Floating 404 Text - Light Gray in light mode, faint white in dark mode */}
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-[10rem] md:text-[15rem] font-black text-slate-100 dark:text-white/5 uppercase tracking-tighter leading-none select-none'
        >
          404
        </motion.h1>

        <div className='-mt-12 md:-mt-20'>
          {/* Main Error Message */}
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className='text-3xl md:text-5xl font-black text-slate-800 dark:text-white uppercase tracking-tighter mb-4'
          >
            Lost in the <span className='text-emerald-500'>Stacks?</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className='text-slate-500 dark:text-slate-400 text-lg mb-10 max-w-md mx-auto leading-relaxed font-medium'
          >
            The page you're looking for has been moved, archived, or simply never existed in our library.
          </motion.p>

          {/* Action Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Link 
              to="/" 
              className="group inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white dark:text-slate-950 px-8 py-4 rounded-full font-black uppercase tracking-widest text-sm transition-all shadow-lg shadow-emerald-500/20 active:scale-95"
            >
              <HiHome size={20} />
              Back to Homepage
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Subtle Bottom Credit */}
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 text-xs text-slate-400 dark:text-white uppercase tracking-[0.4em]"
      >
        Book Haven • System Error
      </motion.p>
    </div>
  );
};

export default PageNotFound;