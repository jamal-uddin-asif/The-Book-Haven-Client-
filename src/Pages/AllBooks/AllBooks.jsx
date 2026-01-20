import React, { useEffect, useState } from "react";
import { useAxiosSecure } from "../../Hooks/useAxiosSecure";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import MyContainer from "../../Components/MyContainer/MyContainer";
import { Link } from "react-router";
import { FaStar } from "react-icons/fa6";
import { SyncLoader } from "react-spinners";
import { FaSearch, FaFilter } from "react-icons/fa"
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


    const [totalBooks , setTotalBooks] = useState(0)

    const [totalPage , setTotalPage] = useState(0)

    const [currentPage, setCurrentPage] = useState(0)

    const limit = 7;
    
    console.log({totalBooks, totalPage})

  useEffect(() => {
    axiosSecure
      .get(`/all-books-sort?sort=${sort}&search=${search}&genre=${genre}`)
      .then((data) => {
        setBooks(data.data);
      });
  }, [search, sort, genre, axiosSecure, ]);

  useEffect(() => {
    axiosSecure.get(`/all-books?limit=${limit}&skip=${limit * currentPage}`).then((data) => {
      setBooks(data.data.result);
      setTotalBooks(data.data.count)
      const page = Math.ceil(data.data.count / limit)
      setTotalPage(page)
      setLoading(false);
    });
  }, [axiosSecure, currentPage]);

  // Animaton

  useEffect(() => {
    Aos.init();
  }, []);

  useEffect(()=>{
    window.scroll(0,0)
  },[currentPage])

  if (loading) return <LoadingSpinner/>

  return (
<div className="min-h-screen bg-slate-50 dark:bg-slate-900 pb-20 transition-colors duration-300">
      <title>Explore Books | The Book Haven</title>
      
      <MyContainer>
        {/* Header & Filters Section */}
        <div className="py-10">
          <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-6 tracking-tight">
            Discover Your Next Read
          </h1>
          
          <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full md:w-1/3">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500" />
              <input
                onChange={(e) => { setSearch(e.target.value); setCurrentPage(0); }}
                className="w-full pl-11 pr-4 py-2.5 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 text-slate-700 dark:text-slate-200 outline-none transition-all placeholder:text-slate-400"
                type="search"
                placeholder="Search by title..."
              />
            </div>

            {/* Filters */}
            <div className="flex gap-3 w-full md:w-auto">
              <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl px-3 w-full">
                <FaFilter className="text-slate-400 dark:text-slate-500 text-sm" />
                <select
                  onChange={(e) => { setGenre(e.target.value); setCurrentPage(0); }}
                  className="bg-transparent py-2.5 outline-none text-slate-600 dark:text-slate-300 text-sm w-full cursor-pointer appearance-none"
                >
                  <option className="dark:bg-slate-800" value="">All Genres</option>
                  <option className="dark:bg-slate-800" value="Fantasy">Fantasy</option>
                  <option className="dark:bg-slate-800" value="Mystery">Mystery</option>
                  <option className="dark:bg-slate-800" value="Not-Fiction">Non-Fiction</option>
                  <option className="dark:bg-slate-800" value="Other">Other</option>
                </select>
              </div>

              <select
                onChange={(e) => { setSort(e.target.value); setCurrentPage(0); }}
                className="bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2.5 outline-none text-slate-600 dark:text-slate-300 text-sm cursor-pointer"
              >
                <option className="dark:bg-slate-800" value="">Sort By</option>
                <option className="dark:bg-slate-800" value="high-low">Rating: High to Low</option>
                <option className="dark:bg-slate-800" value="low-high">Rating: Low to High</option>
              </select>
            </div>
          </div>
        </div>

        {/* Table Section */}
        {books.length === 0 ? (
          <div className="text-center py-20 bg-white dark:bg-slate-800 rounded-3xl border border-dashed border-slate-300 dark:border-slate-600">
            <p className="text-xl text-slate-500 dark:text-slate-400">No books found matching your criteria.</p>
          </div>
        ) : (
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden" >
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead className="bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-700">
                  <tr>
                    <th className="px-6 py-4 text-slate-600 dark:text-slate-400 font-semibold uppercase text-xs tracking-wider">Book Info</th>
                    <th className="px-6 py-4 text-slate-600 dark:text-slate-400 font-semibold uppercase text-xs tracking-wider hidden md:table-cell">Genre</th>
                    <th className="px-6 py-4 text-slate-600 dark:text-slate-400 font-semibold uppercase text-xs tracking-wider">Rating</th>
                    <th className="px-6 py-4 text-slate-600 dark:text-slate-400 font-semibold uppercase text-xs tracking-wider text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                  {books.map((book) => (
                    <tr key={book._id} className="hover:bg-blue-50/50 dark:hover:bg-slate-700/50 transition-colors group">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-4">
                          <img 
                            src={book.coverImage} 
                            className="w-12 h-16 object-cover rounded shadow-sm group-hover:scale-105 transition-transform" 
                            alt={book.title} 
                          />
                          <div>
                            <div className="font-bold text-slate-800 dark:text-slate-100 leading-tight">{book.title}</div>
                            <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">{book.author}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 hidden md:table-cell">
                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-xs font-medium border border-blue-200 dark:border-blue-800/50">
                          {book.genre}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-1.5 font-semibold text-slate-700 dark:text-slate-200">
                          <FaStar className="text-amber-400" />
                          {book.rating}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <Link
                          to={`/book-details/${book._id}`}
                          className="inline-block bg-blue-900 dark:bg-blue-600 hover:bg-blue-700 dark:hover:bg-blue-500 text-white px-5 py-2 rounded-lg text-sm font-medium transition-all shadow-md active:scale-95"
                        >
                          View Details
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Pagination */}
        {totalPage > 1 && (
          <div className="flex justify-center items-center gap-2 mt-12">
            {[...Array(totalPage).keys()].map((i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                className={`w-10 h-10 rounded-xl font-semibold transition-all shadow-sm ${
                  i === currentPage 
                    ? 'bg-blue-900 dark:bg-blue-600 text-white shadow-blue-200 dark:shadow-none' 
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </MyContainer>
    </div>
  );
};

export default AllBooks;
