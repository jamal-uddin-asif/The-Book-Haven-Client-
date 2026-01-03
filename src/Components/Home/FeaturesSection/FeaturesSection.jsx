export const FeaturesSection = () => {
  const features = [
    { title: "Vast Library", desc: "Over 50 books from fiction to non-fiction." },
    { title: "Personalized Recommendations", desc: "Books tailored to your taste." },
    { title: "Offline Reading", desc: "Download books and read anytime, anywhere." },
    { title: "Community Reviews", desc: "See what other readers think before choosing." },
  ];

  return (
    <section className="py-16 ">
        <h1 className="text-2xl pt-3 border-b pb-3 mb-3">Our Features</h1>
      <div className="grid py-10 text-center grid-cols-1 md:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-green-50 dark:bg-base-100 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>
            <p className="text-gray-600 dark:text-white">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
