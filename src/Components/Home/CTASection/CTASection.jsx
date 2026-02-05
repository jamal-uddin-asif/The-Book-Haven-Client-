import { Link } from "react-router";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi2";

export const CTASection = () => {
  return (
    <section className="relative py-24 px-6 my-20 overflow-hidden  bg-slate-900 dark:bg-black text-center shadow-2xl">
      {/* Dynamic Background Blurs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-0">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-600/20 rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Animated Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-6"
        >
          Ready to Start Your <span className="text-emerald-500">Reading Journey?</span>
        </motion.h2>

        {/* Animated Subtext */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-10 text-lg md:text-xl text-slate-400 leading-relaxed"
        >
          Join Book Haven today and dive into a world of endless stories. 
          Discover your next favorite book in our curated collection.
        </motion.p>

        {/* Animated Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              to={'/all-books'} 
              className="group relative flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-10 py-5 rounded-full font-black uppercase tracking-widest text-sm transition-all shadow-[0_10px_30px_-10px_rgba(16,185,129,0.5)]"
            >
              Get Started
              <HiArrowRight className="transition-transform duration-300 group-hover:translate-x-2" size={20} />
            </Link>
          </motion.div>
        </motion.div>

        {/* Trust Indicator */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 text-xs font-bold text-slate-500 uppercase tracking-[0.3em]"
        >
          Free to Join • 50+ Books • Community Driven
        </motion.p>
      </div>
    </section>
  );
};