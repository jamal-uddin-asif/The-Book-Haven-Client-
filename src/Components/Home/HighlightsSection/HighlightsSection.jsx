import { useEffect, useState } from "react";
import MyContainer from "../../MyContainer/MyContainer";
import { useAxiosSecure } from "../../../Hooks/useAxiosSecure";

export const HighlightsSection = () => {

    const [books, setBooks] = useState([]);
  
    const [loading, setLoading] = useState(true);
    const axiosSecure = useAxiosSecure()

      useEffect(() => {
    axiosSecure.get("/all-books").then((data) => {
      setBooks(data.data);
      setLoading(false);
    });
  }, [axiosSecure]);

  const highlights = [
    { number: "24/7", label: "Avilable" },
    { number: "100+", label: "Active Readers" },
    { number: "50+", label: "Authors Featured" },
    { number: "1k+", label: "Monthly Reviews" },
  ];

  return (
    <section className="py-16 md:my-30  bg-green-50 dark:bg-base-100 text-center">
        <MyContainer>

      <h2 className="text-3xl font-bold mb-10">Why Book Haven?</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {highlights.map((item, index) => (
          <div key={index}>
            <h3 className="text-4xl font-bold dark:text-green-600 text-blue-950">{item.number}</h3>
            <p className="text-gray-700 dark:text-white mt-2">{item.label}</p>
          </div>
        ))}
      </div>
        </MyContainer>
    </section>
  );
};
