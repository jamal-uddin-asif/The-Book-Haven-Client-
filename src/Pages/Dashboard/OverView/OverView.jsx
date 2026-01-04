import React, { useEffect, useState } from "react";
import { useAuth } from "../../../Hooks/useAuth";
import { useAxiosSecure } from "../../../Hooks/useAxiosSecure";
import { FiTrendingUp } from "react-icons/fi";
import { FaBook, FaSwatchbook } from "react-icons/fa6";

const OverView = () => {
  const { user } = useAuth();
  const [books, setMyBooks] = useState([]);
  const [totalBooks, setTotalBooks] = useState([]);
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    axiosSecure.get(`/all-books?email=${user?.email}`).then((data) => {
      setMyBooks(data.data);
    });
  }, [user, axiosSecure]);

    useEffect(() => {
      axiosSecure.get("/all-books").then((data) => {
        setTotalBooks(data.data);
      });
    }, [axiosSecure]);
    console.log({books, totalBooks})

    useEffect(() => {
      axiosSecure.get("/count-genre").then((data) => {
        console.log(data.data);
      });
    }, [axiosSecure]);
    
    console.log({books, totalBooks})
  return (
    <div className="p-3">
      <div>
        <div className="md:flex   justify-center gap-5 mt-10">
          <div className="w-full max-w-xl rounded-2xl border border-gray-200 bg-white dark:bg-base-200 p-5 shadow-sm">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100">
                  <span className="text-blue-600 font-semibold">◎</span>
                </div>
                <h3 className="text-sm font-medium ">My Books</h3>
              </div>

              <div>Last 30 day</div>
            </div>

            {/* Value */}
            <div className="mt-6 flex items-center gap-3">
              <h2 className="text-3xl font-bold  flex items-center gap-1"><FaBook />{books.length}</h2>
           
            </div>

            {/* Subtitle */}
            <p className="mt-2 text-sm ">
             total availble books
            </p>
          </div>
          <div className="w-full max-w-xl rounded-2xl border border-gray-200 bg-white dark:bg-base-200 p-5 shadow-sm">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100">
                  <span className="text-blue-600 font-semibold">◎</span>
                </div>
                <h3 className="text-sm font-medium">Total Books</h3>
              </div>

              <div>Last 30 day</div>
            </div>

            {/* Value */}
            <div className="mt-6 flex items-center gap-3">
              <h2 className="text-3xl font-bold  flex items-center gap-1"><FaSwatchbook />{totalBooks.length}</h2>
           
            </div>

            {/* Subtitle */}
            <p className="mt-2 text-sm">
             total number of books
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverView;
