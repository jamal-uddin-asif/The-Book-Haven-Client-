import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-[80vh] py-20 px-6 transition-colors duration-500 overflow-hidden">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center"
      >
        
        {/* Text Section */}
        <div className="relative z-10">
          <motion.p 
            variants={itemVariants}
            className="text-xs uppercase tracking-[0.3em] font-bold text-emerald-600 dark:text-emerald-500 mb-4"
          >
            Discover • Read • Share
          </motion.p>

          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-8"
          >
            About <span className="text-emerald-500">Book Haven</span>
          </motion.h1>

          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              Book Haven is a digital library platform designed for book lovers
              who enjoy discovering, organizing, and sharing books in one
              convenient place.
            </p>

            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed border-l-4 border-emerald-500/30 pl-6 italic">
              "We focus on simplicity, usability, and a smooth reading-related 
              experience for casual readers and passionate bibliophiles alike."
            </p>

            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              Our platform allows users to explore a wide collection of books,
              view detailed information, and build a meaningful connection with 
              the world of literature.
            </p>
          </motion.div>

        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Decorative Glow behind image */}
          <div className="absolute inset-0 bg-emerald-500/20 blur-[100px] rounded-full -z-10 transform scale-75"></div>
          
          <div className="relative group">
            <img
              src="https://i.ibb.co.com/tTwhMyHc/choosing-right-strategy.jpg"
              alt="Reading Illustration"
              className="w-full rounded-[2rem] shadow-2xl grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 border border-white/10"
            />
            {/* Overlay border effect */}
            <div className="absolute inset-0 border-[12px] border-emerald-500/10 rounded-[2rem] -m-4 group-hover:m-0 transition-all duration-500 pointer-events-none"></div>
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
};

export default AboutUs;