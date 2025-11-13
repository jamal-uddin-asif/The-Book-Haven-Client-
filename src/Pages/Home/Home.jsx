import React, { useEffect, useState } from "react";
import books from "../../assets/good-books-ok.png";
import { Link } from "react-router";
import MyContainer from "../../Components/MyContainer/MyContainer";
import { useAxiosSecure } from "../../Hooks/useAxiosSecure";
import LatestBooksCard from "../../Components/Home/LatestBooksCard";
import { BiSolidBookAdd } from "react-icons/bi";
import { FaBookOpenReader } from "react-icons/fa6";
import { MdAutoDelete } from "react-icons/md";
import { TiEdit } from "react-icons/ti";
import banner from '../../assets/library.jpg'

import Aos from "aos";
import 'aos/dist/aos.css'
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";

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
  
  useEffect(()=>{
    Aos.init();
  },[])

    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



  
  return (
    <div className="">
      <title>Home | The Book Haven</title>
      {/* banner  */}

      <div className="">
        <MyContainer>
          <div  className="relative  banner my-5 rounded-xl text-white">
            <div  className="  md:flex py-15  items-center justify-center text-center ">
              <div data-aos="fade-up" className="space-y-4">
                <h1 className="tracking-wide text-2xl  font-bold  md:text-3xl  lg:text-5xl my-heading ">
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

            <div data-aos="fade-up" className="flex justify-center items-center bottom-5 left-5 space-x-2 ">
              <Link
                to={"/all-books"}
                className=" p-2 rounded-sm  bg-blue-950 text-white shadow-xl shadow-blue-950  hover:bg-green-500"
              >
                All Books
              </Link>
              <Link
                to={"/add-book"}
                className=" p-2 rounded-sm  bg-blue-950 text-white shadow-xl shadow-blue-950 hover:bg-green-500 "
              >
                Create Book
              </Link>
            </div>
          </div>

          

          {/* books section  */}

          <div className="md:grid gap-3 grid-cols-12">
            {/* books  */}
            <div className="col-span-8 ">
              <h1 className="border-b mb-4 my-heading py-4 text-2xl">
                Latest Books here
              </h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {loading ? <div className="col-span-full"><LoadingSpinner></LoadingSpinner></div> : latestBooks?.map((book) => (
                  <LatestBooksCard book={book}></LatestBooksCard>
                ))}
              </div>
            </div>
            {/* book of the week  */}
            <div className="col-span-4 p-3 bg-blue-950 rounded-2xl">
              <h1 className="text-white text-2xl pt-3 border-b mb-3">
                Book of the Week
              </h1>
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

          <div className="">
            <h1 className="border-b mb-4 my-heading py-4 text-2xl">
              Feature of this web
            </h1>
            <div className="sm:flex space-y-4 text-center justify-center gap-7 py-6">
              <div className="bg-linear-to-br from-green-400 to-green-800 p-6 rounded-2xl hover:scale-105 transition ease-in-out text-white">
                <div className="flex justify-center">
                  <FaBookOpenReader size={30} />
                </div>
                Read book
              </div>
              <div className="bg-linear-to-br from-orange-400 to-orange-700 p-6 rounded-2xl hover:scale-105 transition ease-in-out text-white">
                <div className="flex justify-center">
                  <BiSolidBookAdd size={30} />
                </div>
                Add book
              </div>
              <div className="bg-linear-to-br from-yellow-300 to-yellow-600 p-6 rounded-2xl hover:scale-105 transition ease-in-out text-white">
                <div className="flex justify-center">
                  <TiEdit size={30} />
                </div>
                Edit book
              </div>
              <div className="bg-linear-to-br from-red-500 to-red-800 p-6 rounded-2xl hover:scale-105 transition ease-in-out text-white">
                <div className="flex justify-center">
                  <MdAutoDelete size={30} />
                </div>
                Delete book
              </div>
            </div>
          </div>
        </MyContainer>
      </div>
    </div>
  );
};

export default Home;
