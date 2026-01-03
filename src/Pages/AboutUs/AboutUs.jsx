import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-br  min-h-[69vh] dark:from-slate-900 dark:to-slate-800 from-indigo-50 to-purple-100 py-16 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Text Section */}
        <div>
          <p className="text-sm uppercase tracking-wide  font-semibold mb-2">
            Discover • Read • Share
          </p>

          <h1 className="text-3xl md:text-4xl font-bold  mb-4">
            About <span className="">Book Haven</span>
          </h1>

          <p className="text-gray-600 dark:text-white mb-4 leading-relaxed">
            Book Haven is a digital library platform designed for book lovers
            who enjoy discovering, organizing, and sharing books in one
            convenient place. Whether you are a casual reader or a passionate
            bibliophile, Book Haven helps you keep track of your reading journey.
          </p>

          <p className="text-gray-600 dark:text-white mb-4 leading-relaxed">
            Our platform allows users to explore a wide collection of books,
            view detailed information, add personal book entries, and manage
            their own reading list with ease. We focus on simplicity, usability,
            and a smooth reading-related experience.
          </p>

          <p className="text-gray-600 dark:text-white leading-relaxed">
            Book Haven aims to create a welcoming space where readers can
            discover new titles, organize their favorite books, and build a
            meaningful connection with the world of literature.
          </p>
        </div>

        {/* Image / Illustration Section */}
        <div className="flex justify-center">
          <img
            src="https://i.ibb.co.com/tTwhMyHc/choosing-right-strategy.jpg"
            alt="Reading Illustration"
            className="w-full "
          />
        </div>

      </div>
    </div>
  );
};

export default AboutUs;
