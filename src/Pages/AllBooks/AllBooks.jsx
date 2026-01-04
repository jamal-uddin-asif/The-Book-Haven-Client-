import React, { useEffect, useState } from "react";
import { useAxiosSecure } from "../../Hooks/useAxiosSecure";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import MyContainer from "../../Components/MyContainer/MyContainer";
import { Link } from "react-router";
import { FaStar } from "react-icons/fa6";
import { SyncLoader } from "react-spinners";

import Aos from "aos";
import "aos/dist/aos.css";

const AllBooks = () => {
  const [books, setBooks] = useState([]);

  const [loading, setLoading] = useState(true);
  const [sort, setSort] = useState("");
  const [genre, setGenre] = useState("");
  const [search, setSearch] = useState("");
  console.log(books);

  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure
      .get(`/all-books-sort?sort=${sort}&search=${search}&genre=${genre}`)
      .then((data) => {
        setBooks(data.data);
      });
  }, [search, sort, genre, axiosSecure]);

  useEffect(() => {
    axiosSecure.get("/all-books").then((data) => {
      setBooks(data.data);
      setLoading(false);
    });
  }, [axiosSecure]);

  // Animaton

  useEffect(() => {
    Aos.init();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <SyncLoader />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <title>All Book | The Book Haven</title>
      <MyContainer>
        <div className="md:flex  justify-between items-center bg-blue-100 dark:bg-base-300  p-2 border-b mb-4 my-heading py-4 text-xl">
          <input
            onChange={(e) => setSearch(e.target.value)}
            className="input outline-0"
            type="search"
            placeholder="Search book"
          />
          <div className="flex gap-2">
            <select
              onChange={(e) => setSort(e.target.value)}
              name=""
              className="select outline-0 max-w-[190px]"
            >
              <option disabled={true}>Chose one</option>
              <option value="low-high">Rating desc</option>
              <option value="high-low">Rating asc</option>
            </select>

            <select
              onChange={(e) => setGenre(e.target.value)}
              name=""
              className="select outline-0 max-w-[170px]"
            >
              <option disabled={true}>Pick one</option>
              <option value="Fantasy">Fantasy</option>
              <option value="Mystery">Mystery</option>
              <option value="Not-Fiction">Not-Fiction</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
        {books.length == 0 ? <div className="text-xl flex justify-center min-h-screen items-center">Books not found</div>:
         <div>
          <div className="overflow-x-auto">
            <table className="table ">
              {/* head */}
              <thead className="bg-blue-950">
                <tr>
                  <th className="text-white">Book</th>
                  <th className="text-white hidden md:block">Genre</th>
                  <th className="text-white">Rating</th>
                  <th className="text-white">Details</th>
                </tr>
              </thead>
              <tbody>
                {books?.map((book, i) => (
                  <tr key={i} className={`shadow bg-blue-50 dark:bg-base-300`}>
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

                    <td className="hidden md:block font-semibold">
                      {book.genre}
                    </td>
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
        }
       
      </MyContainer>
    </div>
  );
};

export default AllBooks;
