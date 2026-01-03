import React, { useEffect, useState } from "react";
import books from "../../assets/good-books-ok.png";
import { Link } from "react-router";
import MyContainer from "../../Components/MyContainer/MyContainer";
import { useAxiosSecure } from "../../Hooks/useAxiosSecure";
import LatestBooksCard from "../../Components/Home/LatestBooksCard";
import banner from "../../assets/library.jpg";

import Aos from "aos";
import "aos/dist/aos.css";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import FeatureOfThisWeb from "../../Components/Home/FeatureOfThisWeb/FeatureOfThisWeb";
import { TestimonialsSection } from "../../Components/Home/testimonial/testimonial";
import { CategoriesSection } from "../../Components/Home/CategoriesSection/CategoriesSection";
import { FeaturesSection } from "../../Components/Home/FeaturesSection/FeaturesSection";
import { HeroSection } from "../../Components/Home/HeroSection/HeroSection";
import { HighlightsSection } from "../../Components/Home/HighlightsSection/HighlightsSection";
import { BlogSection } from "../../Components/Home/BlogSection/BlogSection";
import { NewsletterSection } from "../../Components/Home/NewsletterSection/NewsletterSection";
import { FAQSection } from "../../Components/Home/FAQSection/FAQSection";
import { CTASection } from "../../Components/Home/CTASection/CTASection";

const Home = () => {
  const axiosSecure = useAxiosSecure();
  const [latestBooks, setLatestBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosSecure.get("/latest-books").then((data) => {
      setLatestBooks(data.data);
      setLoading(false);
    });
  });

  // Animaton

  useEffect(() => {
    Aos.init();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-base-200 p-2 md:p-4">
      <title>Home | The Book Haven</title>
      {/* banner  */}

      <div className="">
        <MyContainer>
          <div className="relative  banner my-5 rounded-xl text-white ">
            <div className="  md:flex py-15  items-center justify-center text-center ">
              <div
                data-aos="fade-up"
                className="space-y-4 bg-white/20 rounded-xl p-2"
              >
                <h1 className="tracking-wide text-3xl  bg-blue-950 p-2 rounded-xl font-bold  md:text-4xl  lg:text-5xl my-heading ">
                  Your Personal Library, Reimagined
                </h1>
                <div className="my-heading rounded-full tracking-wider mb-4  ">
                  <p>Add, explore, and cherish every book that inspires you.</p>
                  <p>
                    Discover new reads, share your favorites, and build your
                    dream collection.
                  </p>
                </div>
              </div>
              {/* <div data-aos="fade-left p-8">
               
                <img className="mx-auto " src={books} alt="" />
              </div> */}
            </div>

            <div
              data-aos="fade-up"
              className="flex justify-center items-center bottom-5 left-5 space-x-2 "
            >
              <Link
                to={"/all-books"}
                className=" p-2 rounded-sm  bg-blue-950 text-white shadow-xl shadow-blue-900  hover:bg-blue-800"
              >
                All Books
              </Link>
              <Link
                to={"/add-book"}
                className=" p-2 rounded-sm  bg-blue-950 text-white shadow-xl shadow-blue-900 hover:bg-blue-800 "
              >
                Create Book
              </Link>
            </div>
          </div>

          {/* books section  */}

          <div className="md:grid gap-3 ">
            {/* books  */}
            <div className="">
              <h1 className="border-b mb-4 my-heading py-4 text-2xl">
                Latest Books here
              </h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 ">
                {loading ? (
                  <div className="col-span-full">
                    <LoadingSpinner></LoadingSpinner>
                  </div>
                ) : (
                  latestBooks?.map((book) => (
                    <LatestBooksCard book={book}></LatestBooksCard>
                  ))
                )}
              </div>
            </div>
            {/* book of the week  */}
          </div>
          <div className="my-10 md:my-20 py-3 rounded-2xl">
            <h1 className="text-2xl pt-3 border-b pb-3 mb-3">Book of the Week</h1>
            <div className="md:flex  justify-between ">
             <div className=" flex-1 py-4">
              The Power of Positive Thinking: A Practical Guide to Mastering the
              Problems of Everyday Living is a 1952 self-help book by American
              minister Norman Vincent Peale. It provides anecdotal "case
              histories" of positive thinking using a biblical approach, and
              practical instructions which were designed to help the reader
              achieve a permanent and optimistic attitude. These techniques
              usually involved affirmations and visualizations. Peale claimed
              that such techniques would give the reader a higher satisfaction
              and quality of life. The book was negatively reviewed by scholars
              and health experts{" "}
            </div>
              <div className="flex-1">
                <img className="max-h-100 mx-auto" src="https://i.ibb.co.com/j970FVrw/positive.webp" alt="" />
              </div>
            </div>
           
          </div>

          <FeatureOfThisWeb />

          <TestimonialsSection />

          <CategoriesSection />

          <FeaturesSection />
        </MyContainer>

        <HighlightsSection />

        <NewsletterSection />

        <FAQSection />

        <CTASection />
      </div>
    </div>
  );
};

export default Home;
