import React, { useEffect, useState } from "react";
import { useAxiosSecure } from "../../Hooks/useAxiosSecure";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import MyContainer from "../../Components/MyContainer/MyContainer";
import { Link } from "react-router";
import { FaStar } from "react-icons/fa6";
import { SyncLoader } from "react-spinners";

import Aos from "aos";
import 'aos/dist/aos.css'

const AllBooks = () => {
  const [books, setBooks] = useState([]);

  const [loading, setLoading] = useState(true);
  const [sort, setSort] = useState("");

  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure.get(`/all-books-sort?sort=${sort}`)
    .then(data=>{
        setBooks(data.data)
    })
  }, [sort, axiosSecure]);

  useEffect(() => {
    axiosSecure.get("/all-books").then((data) => {
      setBooks(data.data);
      setLoading(false);
    });
  }, [axiosSecure]);

    // Animaton 
    
    useEffect(()=>{
      Aos.init();
    },[])

  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">
         <SyncLoader/>
    </div>;
  }

  return (
    <div className="">
      <title>All Book | The Book Haven</title>
      <MyContainer>
        <div className="border-b mb-4 my-heading py-4 text-xl">
          <span>Sort by rating</span> {/* <form > */}
          <select
            onChange={(e) => setSort(e.target.value)}
            name=""
            className="select focus:outline-0 "
          >
            <option disabled={true}>Chose one</option>
            <option value="low-high">Low to High</option>
            <option value="high-low">High to Low</option>
          </select>
          {/* </form> */}
        </div>
        <div data-aos="fade-up">
          <div className="overflow-x-auto">
            <table className="table ">
              {/* head */}
              <thead className="bg-red-600">
                <tr>
                  <th className="text-white">Book</th>
                  <th className="text-white hidden md:block">Genre</th>
                  <th className="text-white">Rating</th>
                  <th className="text-white">Details</th>
                </tr>
              </thead>
              <tbody>
                {books?.map((book,i) => (
                  <tr className={i % 2 !== 0? 'bg-cyan-200' : 'bg-cyan-600'}>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img src={book.coverImage} alt={book.title} />
                          </div>
                        </div>
                        <div className="">
                          <div className="font-bold ">{book.title}</div>
                          <div className="text-sm hidden md:block opacity-50 badge badge-info">
                            {book.author}
                          </div>
                        </div>
                      </div>
                    </td>

                    <td className="hidden md:block font-semibold">{book.genre}</td>
                    <td className="w-10">
                      <div className="badge badge-warning">
                        {book?.rating}
                        <FaStar color="gold" />
                      </div>
                    </td>
                    <td className="w-10">
                      <Link
                        to={`/book-details/${book._id}`}
                        className="p-2.5 my-2 rounded-sm  bg-blue-950 text-[#FED3D1] opacity-65 hover:bg-green-500"
                      >
                        Details
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default AllBooks;
