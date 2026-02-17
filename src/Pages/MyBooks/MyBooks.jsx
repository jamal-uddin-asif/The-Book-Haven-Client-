import React, { useEffect, useRef, useState } from "react";
import MyContainer from "../../Components/MyContainer/MyContainer";
import { useAuth } from "../../Hooks/useAuth";
import { useAxiosSecure } from "../../Hooks/useAxiosSecure";
import { FaPenClip, FaStar } from "react-icons/fa6";
import { Link } from "react-router";
import { SyncLoader } from "react-spinners";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import { IoTrashBinSharp } from "react-icons/io5";
import BookUpdateModal from "../../Modals/BookUpdateModal";

const MyBooks = () => {
  const { user } = useAuth();
  const modalRef = useRef("");
  const [books, setMyBooks] = useState([]);
  const [updateBook, setUpdateBook] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(true);

  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure.get(`/all-books?email=${user?.email}`).then((data) => {
      setMyBooks(data.data.result);
      setLoading(false);
    });
  }, [user, axiosSecure, refresh]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you want to delete this book?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/delete-book/${id}`).then((data) => {
          // console.log(data);
          if (data.data.deletedCount) {
            const filter = books.filter((book) => book._id !== id);
            setMyBooks(filter);
            Swal.fire({
              title: "Book Deleted!",
              text: "Your Book has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  const handleOpenModalAndFetch = (id) => {
    modalRef.current.showModal();
    axiosSecure.get(`/bookDetails/${id}`).then((data) => {
      // console.log(data.data);
      setUpdateBook(data.data);
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    const title = e.target.title.value;
    const author = e.target.author.value;
    const genre = e.target.genre.value;
    const rating = e.target.rating.value;
    const coverImage = e.target.coverImage.value;
    const summary = e.target.summary.value;
    const userEmail = user?.email;
    const userName = user?.displayName;

    const forUpdate = {
      title,
      author,
      genre,
      rating,
      coverImage,
      summary,
      userEmail,
      userName,
    };
    // console.log({
    //   title,
    //   author,
    //   genre,
    //   rating,
    //   coverImage,
    //   summary,
    //   userEmail,
    //   userName,
    // });

    axiosSecure
      .patch(`/update-Book/${updateBook._id}`, forUpdate)
      .then((data) => {
        if (data.data.modifiedCount) {
          // console.log(data.data);
          modalRef.current.close();
          toast.success("Book updated");
          setRefresh(!true);
        }
      });
  };

  if (loading) {
    return (
      <MyContainer>
        <div className="my-5 flex justify-center items-center  rounded-2xl bg-blue-950 min-h-screen">
          <SyncLoader color="white" />
        </div>
      </MyContainer>
    );
  }

  return (
    <motion.div
    initial={{opacity: 0, y:20}}
    animate={{opacity: 1, y:0}}
    transition={{duration:0.5}}
    className="md:px-6 px-2">
      <title>My Books | The Book Haven</title>
      <MyContainer>
        <div className="my-5  rounded-2xl bg-white dark:bg-base-100 min-h-screen">
          <div>
            <div className="overflow-x-auto rounded-xl">
              <table className="table">
                {/* head */}
                <thead>
                  <tr className="bg-blue-950">
                    <th className=" text-white">Book</th>
                    <th className="text-white hidden md:block ">
                      Genre
                    </th>
                    <th className="text-white ">Rating</th>
                    <th className="text-white w-10">Update</th>
                    <th className="text-white w-12">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {books?.map((book, i) => (
                    <tr
                    key={i}
                      className={`bg-white dark:bg-base-100 dark:hover:bg-base-300 hover:bg-slate-50 shadow-2xl`}
                    >
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                              <img src={book.coverImage} alt={book.title} />
                            </div>
                          </div>
                          <div className="">
                            <div className="font-bold">{book.title}</div>
                            <div className="hidden md:block text-sm opacity-50 badge badge-info">
                              {book.author}
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="w-10 font-semibold hidden md:block">{book.genre}</td>
                      <td>
                        <div className="w-10 badge badge-">
                          {book?.rating} 
                          <FaStar color="gold" />
                        </div>
                      </td>
                      <td>
                        <button
                          onClick={() => handleOpenModalAndFetch(book?._id)}
                          className="hover:bg-slate-200  text-[#FED3D1] p-3 rounded-sm"
                        >
                        <FaPenClip size={20} color="green"/>
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={() => handleDelete(book._id)}
                          className="p-2.5 my-2 rounded-sm  opacity-65 hover:bg-red-700"
                        >
                          <IoTrashBinSharp size={20} color="red" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </MyContainer>

      <BookUpdateModal modalRef={modalRef} handleUpdate={handleUpdate} updateBook={updateBook}/>

    </motion.div>
  );
};

export default MyBooks;
