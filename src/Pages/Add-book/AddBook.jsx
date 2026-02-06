import React from "react";
import boy from "../../assets/boy.jpg";
import MyContainer from "../../Components/MyContainer/MyContainer";
import { useAuth } from "../../Hooks/useAuth";
import { useAxiosSecure } from "../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

const AddBook = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const handleAddBook = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const author = e.target.author.value;
    const genre = e.target.genre.value;
    const rating = e.target.rating.value;
    const coverImage = e.target.coverImage.value;
    const summary = e.target.summary.value;
    const userEmail = user?.email;
    const userName = user?.displayName;
    const create_at = new Date();

    if (!title || !author || !genre || !rating || !coverImage || !summary) {
      toast.error("Please fill out the entire form");
      return;
    }

    const newBook = {
      title,
      author,
      genre,
      rating,
      coverImage,
      userEmail,
      userName,
      create_at,
      summary,
    };

    axiosSecure.post("/books", newBook).then((data) => {
      e.target.reset();
      toast.success("Book Added to Haven!");
    });
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen transition-colors duration-500">
      <title>Add Book | The Book Haven</title>
      <MyContainer>
        <div className="py-12 md:py-20 flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Form Section - Animated from Left */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full max-w-xl"
          >
            <div className="bg-white dark:bg-slate-900 shadow-2xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden">
              
              {/* Subtle Decorative Background Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>

              <div className="relative z-10">
                <header className="mb-10 text-center md:text-left">
                  <h1 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">
                    Add Your <span className="text-emerald-500">Book</span>
                  </h1>
                  <div className="h-1.5 w-12 bg-emerald-500 mt-2 rounded-full mx-auto md:mx-0"></div>
                </header>

                <form onSubmit={handleAddBook} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Title */}
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Title</label>
                      <input
                        type="text"
                        name="title"
                        className="w-full px-5 py-3.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all dark:text-white"
                        placeholder="Enter book title"
                      />
                    </div>

                    {/* Author */}
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Author</label>
                      <input
                        type="text"
                        name="author"
                        className="w-full px-5 py-3.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all dark:text-white"
                        placeholder="Author name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Genre */}
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Genre</label>
                      <select
                        name="genre"
                        className="w-full px-5 py-3.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl focus:border-emerald-500 outline-none dark:text-white cursor-pointer appearance-none"
                      >
                        <option value="Fantasy">Fantasy</option>
                        <option value="Mystery">Mystery</option>
                        <option value="Non-Fiction">Non-Fiction</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    {/* Rating */}
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Rating</label>
                      <select
                        name="rating"
                        className="w-full px-5 py-3.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl focus:border-emerald-500 outline-none dark:text-white cursor-pointer appearance-none"
                      >
                        <option value="5">5 Stars</option>
                        <option value="4">4 Stars</option>
                        <option value="3">3 Stars</option>
                        <option value="2">2 Stars</option>
                        <option value="1">1 Star</option>
                      </select>
                    </div>
                  </div>

                  {/* Cover Image */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Cover Image URL</label>
                    <input
                      type="url"
                      name="coverImage"
                      className="w-full px-5 py-3.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl focus:border-emerald-500 outline-none dark:text-white"
                      placeholder="https://example.com/image.jpg"
                    />
                  </div>

                  {/* Summary */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Summary</label>
                    <textarea
                      name="summary"
                      rows={4}
                      className="w-full px-5 py-3.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl focus:border-emerald-500 outline-none dark:text-white resize-none"
                      placeholder="Briefly describe the book..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black uppercase tracking-[0.2em] py-4 rounded-2xl transition-all shadow-lg shadow-emerald-500/20 mt-4"
                  >
                    Add Book
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>

        
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 hidden md:flex justify-center relative"
          >
            {/* Background Glow behind image */}
            <div className="absolute inset-0 bg-emerald-500/20 blur-[120px] rounded-full -z-10 animate-pulse"></div>
            
            <motion.img
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="max-h-[580px] rounded-[3rem] shadow-2xl border-8 border-white dark:border-slate-900 object-cover rotate-2"
              src={boy}
              alt="Illustration"
            />
          </motion.div>
        </div>
      </MyContainer>
    </div>
  );
};

export default AddBook;