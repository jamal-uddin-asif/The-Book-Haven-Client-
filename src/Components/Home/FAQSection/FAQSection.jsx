import { useState } from "react";

export const FAQSection = () => {
  const faqs = [
    { question: "Is Book Haven free to use?", answer: "Yes, you can explore thousands of books for free." },
    { question: "Can I download books?", answer: "Yes, most books can be downloaded for offline reading." },
    { question: "How do personalized recommendations work?", answer: "We suggest books based on your reading history and preferences." },
  ];

  const [openIndex, setOpenIndex] = useState(null); // Track which FAQ is open

  const handleShow = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); // Close if the same FAQ is clicked again
    } else {
      setOpenIndex(index); // Open the clicked FAQ
    }
  };

  return (
    <section className="py-16 px-6 md:my-20">
      <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
      <div className="mx-auto space-y-6 max-w-3xl">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white dark:bg-base-100 p-6 rounded-xl shadow">
            <h3 className="font-semibold text-lg mb-2 flex justify-between items-center">
              {faq.question}
              <span
                onClick={() => handleShow(index)}
                className="bg-green-50 dark:bg-base-100 p-1 rounded-full text-xl cursor-pointer select-none"
              >
                {openIndex === index ? "−" : "+"}
              </span>
            </h3>
            <p className={`text-gray-700 bg-green-100 p-2 rounded-xl transition-all duration-300 ${openIndex === index ? "block" : "hidden"}`}>
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
