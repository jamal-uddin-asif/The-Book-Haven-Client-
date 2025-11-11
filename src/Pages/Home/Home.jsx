import React, { useEffect, useState } from "react";
import books from "../../assets/good-books-ok.png";
import { Link } from "react-router";
import MyContainer from "../../Components/MyContainer/MyContainer";
import { useAxiosSecure } from "../../Hooks/useAxiosSecure";
import LatestBooksCard from "../../Components/Home/LatestBooksCard";
import { BiSolidBookAdd } from "react-icons/bi";

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

  return (
    <div className="bg-[#FED3D1]">
      {/* banner  */}

      <div className="">
        <MyContainer>
          <div className="relative  ">
            <div className="  md:flex py-15  items-center justify-center text-center ">
              <div className="space-y-4">
                <h1 className="animate-bounce text-2xl text-green-800 font-bold  md:text-3xl  lg:text-5xl my-heading ">
                  Your Personal Library, Reimagined
                </h1>
                <div className="my-heading rounded-full text-yellow-700 mb-4  ">
                  <p>Add, explore, and cherish every book that inspires you.</p>
                  <p>
                    Discover new reads, share your favorites, and build your
                    dream collection.
                  </p>
                </div>
              </div>
              <div>
                <img className="mx-auto " src={books} alt="" />
              </div>
            </div>

            <div className="absolute bottom-5 left-5 space-x-2 ">
              <Link
                to={"/all-books"}
                className=" p-2 rounded-sm  bg-green-700 opacity-65 hover:bg-green-500"
              >
                All Books
              </Link>
              <Link
                to={"/add-book"}
                className=" p-2 rounded-sm bg-green-700 hover:bg-green-500 opacity-60 shadow-2xl"
              >
                Create Book
              </Link>
            </div>
          </div>

          {/* books section  */}

          <div className="md:grid grid-cols-12">
            {/* books  */}
            <div className="col-span-8 ">
              <h1 className="border-b mb-4 my-heading py-4 text-2xl">
                Latest Books here
              </h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {latestBooks?.map((book) => (
                  <LatestBooksCard book={book}></LatestBooksCard>
                ))}
              </div>
            </div>
            {/* book of the week  */}
            <div className="col-span-4 p-3 bg-blue-950 rounded-2xl">
              <h1 className="text-white text-2xl pt-3 border-b mb-3">Book of the Week</h1>
              <div>
                <img src="https://i.ibb.co.com/j970FVrw/positive.webp" alt="" />
              </div>
              <div className="text-white py-4">
                The Power of Positive Thinking: A Practical Guide to Mastering
                the Problems of Everyday Living is a 1952 self-help book by
                American minister Norman Vincent Peale. It provides anecdotal
                "case histories" of positive thinking using a biblical approach,
                and practical instructions which were designed to help the
                reader achieve a permanent and optimistic attitude. These
                techniques usually involved affirmations and visualizations.
                Peale claimed that such techniques would give the reader a
                higher satisfaction and quality of life. The book was negatively
                reviewed by scholars and health experts{" "}
              </div>
            </div>
          </div>
        </MyContainer>
      </div>
    </div>
  );
};

export default Home;
