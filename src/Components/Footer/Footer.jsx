import React from "react";
import MyContainer from "../MyContainer/MyContainer";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6"; // Added LinkedIn
import { Link } from "react-router"; 
import { motion } from "framer-motion";

const Footer = () => {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  };

  return (
    <motion.footer 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      className="bg-slate-950 md:px-6 px-2 text-slate-300 pt-16 pb-6 border-t border-slate-900"
    >
      <MyContainer>
        {/* Top Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pb-8 border-b border-slate-800 gap-4">
          <div className="flex items-center gap-2">
            <img
              className="w-8 h-8"
              src="https://img.icons8.com/plasticine/100/book.png"
              alt="Logo"
            />
            <span className="text-2xl font-black text-white uppercase tracking-tighter">
              Book <span className="text-emerald-500">Haven</span>
            </span>
          </div>
          
          <p className="text-slate-500 text-sm md:text-base">
            Add, explore, and cherish every book that inspires you.
          </p>
        </div>

        {/* Middle Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 py-12 border-b border-slate-800">
          
          {/* Column 1: Navigation */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Pages</h4>
            <ul className="space-y-3 text-sm">
                <li><Link to={'/'} className="hover:text-emerald-500 transition-colors">Home</Link></li>
                <li><Link to={'/all-books'} className="hover:text-emerald-500 transition-colors">All books</Link></li>
                <li><Link to={'/terms'} className="hover:text-emerald-500 transition-colors">Terms</Link></li>
                <li><Link to={'/about-us'} className="hover:text-emerald-500 transition-colors">About</Link></li>
            </ul>
          </div>

          {/* Column 2: About us */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">About us</h4>
            <ul className="space-y-3 text-sm text-slate-400">
                <li className="hover:text-white cursor-pointer transition-colors">Corporate Profile</li>
                <li className="hover:text-white cursor-pointer transition-colors">Our team</li>
                <li className="hover:text-white cursor-pointer transition-colors">Portfolio</li>
                <li className="hover:text-white cursor-pointer transition-colors">Our office</li>
            </ul>
          </div>

          {/* Column 3: Quick Connect (Updated with LinkedIn) */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Quick Connect</h4>
            <div className="space-y-3">
                <Link to={'https://www.facebook.com/asifzehendmg'} target="_blank" className="flex items-center gap-2 hover:text-emerald-500 transition-all group">
                    <FaFacebook className="group-hover:scale-110 transition-transform" />
                    <span className="text-sm">Facebook</span>
                </Link>
                <Link to={'https://www.instagram.com/asif_zehen76/'} target="_blank" className="flex items-center gap-2 hover:text-emerald-500 transition-all group">
                    <FaInstagram className="group-hover:scale-110 transition-transform" />
                    <span className="text-sm">Instagram</span>
                </Link>
                {/* LinkedIn Link Added Here */}
                <Link to={'https://www.linkedin.com/in/asif-jamaluddin/'} target="_blank" className="flex items-center gap-2 hover:text-emerald-500 transition-all group">
                    <FaLinkedin className="group-hover:scale-110 transition-transform" />
                    <span className="text-sm">LinkedIn</span>
                </Link>
            </div>
          </div>

          {/* Column 4: Latest Books */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Latest books</h4>
            <div className="space-y-3 text-sm">
                <p className="hover:text-emerald-400 cursor-pointer transition-colors">The Power of Money</p>
                <p className="hover:text-emerald-400 cursor-pointer transition-colors">The Power of Positive thinking</p>
                <p className="hover:text-emerald-400 cursor-pointer transition-colors">How to talk to anyone</p>
            </div>
          </div>    
        </div>

        {/* Bottom Section */}
        <div className="text-center pt-8 text-xs text-slate-600 font-medium uppercase tracking-[0.2em]">
            © 2025 The Book Haven. All rights reserved.
        </div>
      </MyContainer>
    </motion.footer>
  );
};

export default Footer;