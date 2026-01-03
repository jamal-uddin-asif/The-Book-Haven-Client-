export const BlogSection = () => {
  const blogs = [
    { title: "Top 10 Must-Read Books of 2026", snippet: "Explore the books everyone is talking about this year.", link: "#" },
    { title: "How to Build a Daily Reading Habit", snippet: "Simple tips to make reading part of your routine.", link: "#" },
    { title: "Interview with Author Jane Doe", snippet: "Insights from one of the most celebrated authors today.", link: "#" },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-10">From Our Blog</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
            <p className="text-gray-600 mb-4">{blog.snippet}</p>
            <a href={blog.link} className="text-green-500 font-medium hover:underline">Read More</a>
          </div>
        ))}
      </div>
    </section>
  );
};
