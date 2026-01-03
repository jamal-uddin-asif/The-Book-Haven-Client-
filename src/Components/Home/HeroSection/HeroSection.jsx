export const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-green-100 to-white py-20 px-6 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Book Haven</h1>
      <p className="text-lg md:text-2xl text-gray-700 mb-6">
        Discover, read, and explore thousands of books from every genre imaginable.
      </p>
      <div className="flex justify-center gap-4">
        <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition">
          Explore Books
        </button>
        <button className="bg-white border border-green-500 text-green-500 px-6 py-3 rounded-lg hover:bg-green-50 transition">
          Join Newsletter
        </button>
      </div>
    </section>
  );
};
