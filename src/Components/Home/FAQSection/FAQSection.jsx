import { useState } from "react";
import { HiChevronDown } from "react-icons/hi2";

export const FAQSection = () => {
  const faqs = [
    { question: "Is Book Haven free to use?", answer: "Yes, you can explore thousands of books for free. We believe in making literature accessible to everyone through our ad-supported platform." },
    { question: "Can I download books?", answer: "Absolutely! Most of our titles are available for offline reading. Simply click the download icon on the book detail page." },
    { question: "How do personalized recommendations work?", answer: "Our smart algorithm analyzes your reading history, genres you enjoy, and authors you follow to suggest titles perfectly tailored to your taste." },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-24 px-6 max-w-4xl mx-auto">
      {/* Signature Title Design */}
      <div className="mb-16 text-center">
        <h2 className="text-3xl font-black text-slate-800 dark:text-white uppercase tracking-tighter">
          Common <span className="text-emerald-500">Questions</span>
        </h2>
        <div className="h-1.5 w-12 bg-emerald-500 mt-2 mx-auto rounded-full"></div>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div 
              key={index} 
              className={`group border rounded-2xl transition-all duration-300 ${
                isOpen 
                ? "border-emerald-500/50 bg-emerald-50/30 dark:bg-emerald-950/10 shadow-lg shadow-emerald-500/5" 
                : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-emerald-500/30"
              }`}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
              >
                <span className={`text-lg font-bold transition-colors duration-300 ${
                  isOpen ? "text-emerald-600 dark:text-emerald-400" : "text-slate-700 dark:text-slate-200 group-hover:text-emerald-500"
                }`}>
                  {faq.question}
                </span>
                
                <div className={`transition-transform duration-500 p-2 rounded-full ${
                  isOpen ? "bg-emerald-500 text-white rotate-180" : "bg-slate-100 dark:bg-slate-800 text-slate-500 group-hover:bg-emerald-50 group-hover:text-emerald-500"
                }`}>
                  <HiChevronDown size={20} />
                </div>
              </button>

          
              <div className={`grid transition-all duration-300 ease-in-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}>
                <div className="overflow-hidden">
                  <div className="px-6 pb-6 text-slate-600 dark:text-slate-400 leading-relaxed border-t border-emerald-100/20 dark:border-emerald-900/20 pt-4">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};