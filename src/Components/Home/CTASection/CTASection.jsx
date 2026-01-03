import { Link } from "react-router";

export const CTASection = () => {
  return (
    <section className="py-20 md:my-20 px-6 bg-green-100 dark:bg-base-100 text-center rounded-xl my-10">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Reading Journey?</h2>
      <p className="mb-6 text-lg md:text-xl">Join Book Haven today and dive into a world of endless stories.</p>
      <Link to={'/all-books'} className="bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-65 transition">
        Get Started
      </Link>
    </section>
  );
};
