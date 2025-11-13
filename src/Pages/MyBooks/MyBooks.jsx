import React, { useEffect, useRef, useState } from "react";
import MyContainer from "../../Components/MyContainer/MyContainer";
import { useAuth } from "../../Hooks/useAuth";
import { useAxiosSecure } from "../../Hooks/useAxiosSecure";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router";
import { SyncLoader } from "react-spinners";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

import Aos from "aos";
import "aos/dist/aos.css";

const MyBooks = () => {
  const { user } = useAuth();
  const modalRef = useRef("");
  const [books, setMyBooks] = useState([]);
  const [updateBook, setUpdateBook] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(true);

  const axiosSecure = useAxiosSecure();

  // Animaton

  useEffect(() => {
    Aos.init();
  }, []);

  useEffect(() => {
    axiosSecure.get(`/all-books?email=${user?.email}`).then((data) => {
      setMyBooks(data.data);
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
          console.log(data);
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
      console.log(data.data);
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
    console.log({
      title,
      author,
      genre,
      rating,
      coverImage,
      summary,
      userEmail,
      userName,
    });

    axiosSecure
      .patch(`/update-Book/${updateBook._id}`, forUpdate)
      .then((data) => {
        if (data.data.modifiedCount) {
          console.log(data.data);
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
    <div>
      <MyContainer>
        <div data-aos="fade-up" className="my-5 rounded-2xl bg-blue-950 min-h-screen">
          <div>
            <div className="overflow-x-auto rounded-xl">
              <table className="table ">
                {/* head */}
                <thead>
                  <tr>
                    <th className="text-blue-900 bg-blue-300">Book</th>
                    <th className="text-blue-900 hidden md:block bg-blue-300 ">
                      Genre
                    </th>
                    <th className="text-blue-900 bg-blue-300 ">Rating</th>
                    <th className="text-blue-900 bg-blue-300 w-10">Update</th>
                    <th className="text-blue-900 bg-blue-300 w-12">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {books?.map((book, i) => (
                    <tr
                      className={`${
                        i % 2 === 0 ? "bg-amber-100" : "bg-emerald-200"
                      }`}
                    >
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
                        <button
                          onClick={() => handleOpenModalAndFetch(book?._id)}
                          className="bg-green-600 text-[#FED3D1] p-1.5 rounded-sm"
                        >
                          Update
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={() => handleDelete(book._id)}
                          className="p-2.5 my-2 rounded-sm  bg-red-700 text-[#FED3D1] opacity-65 hover:bg-green-500"
                        >
                          Delete
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

      <div>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        {/* <button
          className="btn"
          onClick={() => document.getElementById("my_modal_5").showModal()}
        >
          open modal
        </button> */}
        <dialog
          ref={modalRef}
          id="my_modal_5"
          className="modal modal-bottom sm:modal-middle"
        >
          <div className="modal-box">
            <div className="modal-action">
              <div>
                <div className=" card   bg-white/10 w-full max-w-sm shrink-0 ">
                  <h1 className="text-center py-3 text-2xl font-bold text-green-700 my-heading ">
                    Update Your Book
                  </h1>
                  <form onSubmit={handleUpdate} className="px-5 pb-5 ">
                    <fieldset className="fieldset">
                      <label className="label">Title</label>
                      <input
                        type="text"
                        name="title"
                        className="input   focus:outline-0 rounded-xl "
                        placeholder="Title"
                        defaultValue={updateBook.title}
                      />

                      <label className="label">Author</label>
                      <input
                        type="text"
                        name="author"
                        className="input focus:outline-0 rounded-xl"
                        placeholder="Author"
                        defaultValue={updateBook.author}
                      />

                      {/* genre  */}
                      <div className="flex gap-2 justify-around items-center">
                        <div>
                          <label className="label">Genre</label>
                          <select
                            defaultValue={updateBook.genre}
                            className="select "
                            name="genre"
                          >
                            <option disabled={true}>Pick one</option>
                            <option value="Fantasy">Fantasy</option>
                            <option value="Mystery">Mystery</option>
                            <option value="Not-Fiction">Not-Fiction</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>

                        <div>
                          <label className="label">Rating</label>
                          <input
                            type="text"
                            name="rating"
                            className="input focus:outline-0 rounded-xl"
                            placeholder="Rating"
                            defaultValue={updateBook.rating}
                          />
                        </div>
                      </div>

                      <label className="label">Cover Image</label>
                      <input
                        type="url"
                        name="coverImage"
                        className="input focus:outline-0 rounded-xl"
                        placeholder="Image URL"
                        defaultValue={updateBook.coverImage}
                      />

                      <label className="label">Summary</label>
                      <textarea
                        className="bg-blue-200 rounded-2xl p-2"
                        name="summary"
                        rows={8}
                        cols={9}
                        defaultValue={updateBook.summary}
                      ></textarea>

                      <button className="text-[#5d806a] rounded-full text-xl btn bg-linear-to-br from-[#FED3D1] to-[#a58c8b] mt-4">
                        Update Now
                      </button>
                    </fieldset>
                  </form>
                </div>
              </div>
              <form method="dialog">
                <button className="rounded-sm px-2 py-1 bg-red-600 text-white">
                  X
                </button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default MyBooks;
