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
import Banner from "../../Components/Home/Banner/Banner";
import BookOfTheWeek from "../../Components/Home/BookOfTheWeek/BookOfTheWeek";

const Home = () => {
  const axiosSecure = useAxiosSecure();
  const [latestBooks, setLatestBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosSecure.get("/latest-books").then((data) => {
      setLatestBooks(data.data);
      setLoading(false);
    });
  }, []);

  // Animaton

  useEffect(() => {
    Aos.init();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-blue-50 dark:bg-base-100  ">
      <title>Home | The Book Haven</title>
      {/* banner  */}
      
       <Banner/>

       <MyContainer>
          {/* books section  */}
          <div className="md:grid gap-3 p-2 md:p-4">
            {/* books  */}
            <div className="">
               {/* Signature Title */}
      <div className="mb-14">
        <h2 className="text-3xl font-black text-slate-800 dark:text-white uppercase tracking-tighter">
          Latest Books <span className="text-emerald-500">here</span>
        </h2>
        <div className="h-1.5 w-20 bg-emerald-500 mt-2 rounded-full"></div>
      </div>
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

          <BookOfTheWeek/>


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
  );
};

export default Home;
