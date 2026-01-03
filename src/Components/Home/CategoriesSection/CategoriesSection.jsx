export const CategoriesSection = () => {
  const categories = ["Fiction", "Non-Fiction", "Mystery", "Sci-Fi", "Romance", "Self-Help", "Biographies"];
  
  return (
    <section className="py-16 ">
          <h1 className="text-2xl pt-3 pb-3 border-b mb-3">Book Categories</h1>
      <div className="flex my-11 flex-wrap justify-center gap-4">
        {categories.map((category, index) => (
          <span key={index} className="dark:bg-green-100 bg-blue-950 text-white dark:text-black px-5 py-3 rounded-full font-medium hover:bg-green-200 transition">
            {category}
          </span>
        ))}
      </div>
    </section>
  );
};
