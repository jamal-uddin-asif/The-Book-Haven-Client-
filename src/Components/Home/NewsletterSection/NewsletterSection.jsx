import toast from "react-hot-toast";
import { HiOutlineMailOpen } from "react-icons/hi"; // Mail icon for professional touch
import { FiSend } from "react-icons/fi"; // Send icon for the button

export const NewsletterSection = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    toast.success("Welcome to the Book Haven family!");
    e.target.reset();
  };

  return (
    <section className="relative py-20 px-6 my-20 overflow-hidden  bg-slate-900 dark:bg-slate-950 border border-slate-800 shadow-2xl">
      {/* Decorative Background Elements */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Signature Title Style */}
        <div className="inline-flex items-center justify-center p-3 mb-6 rounded-2xl bg-emerald-500/10 text-emerald-500">
          <HiOutlineMailOpen size={32} />
        </div>
        
        <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-4">
          Stay in the <span className="text-emerald-500">Literary Loop</span>
        </h2>
        
        <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          Get the latest book releases, curated reading lists, and exclusive 
          author interviews delivered straight to your inbox.
        </p>

        <form
          onSubmit={handleSubscribe}
          className="relative flex flex-col md:flex-row items-stretch justify-center gap-3 p-2 bg-slate-800/50 backdrop-blur-md rounded-2xl md:rounded-full border border-slate-700 max-w-2xl mx-auto group transition-all duration-300 focus-within:border-emerald-500/50 focus-within:shadow-[0_0_20px_rgba(16,185,129,0.1)]"
        >
          <input
            type="email"
            required
            name="email"
            placeholder="Enter your email address"
            className="flex-1 px-6 py-4 bg-transparent text-white placeholder-slate-500 outline-none rounded-full"
          />
          
          <button className="flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-8 py-4 rounded-xl md:rounded-full transition-all duration-300 active:scale-95 group/btn overflow-hidden">
            <span>Subscribe Now</span>
            <FiSend className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
          </button>
        </form>
        
        <p className="mt-6 text-xs text-slate-500 uppercase tracking-[0.2em]">
          No spam. Only the best stories.
        </p>
      </div>
    </section>
  );
};