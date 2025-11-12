import React, { useEffect, useState } from "react";
import { useAxiosSecure } from "../../Hooks/useAxiosSecure";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import MyContainer from "../../Components/MyContainer/MyContainer";
import { Link } from "react-router";
import { FaStar } from "react-icons/fa6";
import { SyncLoader } from "react-spinners";

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
  }, [sort]);

  useEffect(() => {
    axiosSecure.get("/all-books").then((data) => {
      setBooks(data.data);
      setLoading(false);
    });
  }, [axiosSecure]);

  if (loading) {
    return <div className="bg-[#FED3D1] flex justify-center items-center min-h-screen">
         <SyncLoader/>
    </div>;
  }

  return (
    <div className="bg-[#FED3D1]">
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
        <div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th className="text-blue-900">Book</th>
                  <th className="text-blue-900 hidden md:block">Genre</th>
                  <th className="text-blue-900">Rating</th>
                  <th className="text-blue-900">Details</th>
                </tr>
              </thead>
              <tbody>
                {books?.map((book) => (
                  <tr className="">
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img src={book.coverImage} alt={book.title} />
                          </div>
                        </div>
                        <div className="md:block hidden">
                          <div className="font-bold">{book.title}</div>
                          <div className="text-sm opacity-50 badge badge-info">
                            {book.author}
                          </div>
                        </div>
                      </div>
                    </td>

                    <td className="hidden md:block">{book.genre}</td>
                    <td>
                      <div className="badge badge-warning">
                        {book?.rating}
                        <FaStar color="gold" />
                      </div>
                    </td>
                    <td>
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
