import React from "react";
export const TestimonialsSection = () => {
  const testimonials = [
    { name: "Sarah J.", feedback: "Book Haven helped me discover amazing books I never knew existed!" },
    { name: "David K.", feedback: "The personalized recommendations are spot-on. I love it!" },
    { name: "Mina L.", feedback: "A clean and easy-to-use platform for all book lovers." },
  ];

  return (
    <section className="py-16 ">
          <h1 className="text-2xl pb-3 pt-3 border-b mb-3">What Our Readers Say</h1>
      {/* <h2 className="text-3xl font-bold mb-10">What Our Readers Say</h2> */}
      <div className="flex text-center flex-col md:flex-row justify-center gap-8">
        {testimonials.map((t, index) => (
          <div key={index} className="bg-green-50 dark:bg-base-100 p-6 rounded-xl shadow max-w-xs mx-auto">
            <p className="text-gray-700 dark:text-white mb-4">"{t.feedback}"</p>
            <h4 className="font-semibold  text-shadow-blue-950">{t.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};
