import { FiBookOpen, FiStar, FiCheckCircle } from "react-icons/fi";

const BookOfTheWeek = () => {
  return (
    <div className="my-12  md:my-24 overflow-hidden rounded-3xl  light:bg-gradient-to-br  from-slate-50 to-slate-100 dark:bg-base-300 border border-slate-200 shadow-xl">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 p-8 md:p-12">
        
        {/* Left Side: Content */}
        <div className="flex-1 space-y-6">
          <div className="flex items-center gap-2 font-semibold tracking-wide uppercase text-sm">
            <FiStar className="animate-pulse" />
            <span>Editor's Choice</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold  leading-tight">
            Book of the <span className="text-indigo-600">Week</span>
          </h1>

          <div className="h-1 w-20 bg-indigo-600 rounded-full"></div>

          <p className=" leading-relaxed text-lg">
            <span className="font-semibold ">The Power of Positive Thinking</span> 
            is a timeless guide by Norman Vincent Peale. It offers a practical, 
            biblical approach to mastering everyday challenges through the 
            strength of affirmations and visualization.
          </p>

          <ul className="space-y-3">
            <li className="flex items-center gap-3 ">
              <FiCheckCircle className="text-green-500 flex-shrink-0" />
              <span>Practical instructions for optimism</span>
            </li>
            <li className="flex items-center gap-3">
              <FiCheckCircle className="text-green-500 flex-shrink-0" />
              <span>Proven visualization techniques</span>
            </li>
          </ul>

        
        </div>

        {/* Right Side: Image */}
        <div className="flex-1 relative group">
          <div className="absolute inset-0 bg-indigo-200 blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
          <div className="relative">
            <img 
              className="max-h-[450px] mx-auto rounded-lg shadow-2xl transform transition-transform duration-500 group-hover:scale-105" 
              src="https://i.ibb.co.com/j970FVrw/positive.webp" 
              alt="The Power of Positive Thinking" 
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default BookOfTheWeek;