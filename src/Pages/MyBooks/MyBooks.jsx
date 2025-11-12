import React, { useEffect, useState } from "react";
import MyContainer from "../../Components/MyContainer/MyContainer";
import { useAuth } from "../../Hooks/useAuth";
import { useAxiosSecure } from "../../Hooks/useAxiosSecure";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router";
import { SyncLoader } from "react-spinners";

const MyBooks = () => {
  const { user } = useAuth();
  const [books, setMyBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure.get(`/all-books?email=${user?.email}`).then((data) => {
      setMyBooks(data.data);
      setLoading(false);
    });
  }, [user, axiosSecure]);

  const handleDelete = (id) => {
    
    axiosSecure.delete(`/delete-book/${id}`)
    .then(data=>{
        console.log(data)
        if(data.data.deletedCount){
            const filter = books.filter(book=> book._id !== id)
            setMyBooks(filter)
        }

    })

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
        <div className="my-5 rounded-2xl bg-blue-950 min-h-screen">
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
                        <button className="bg-green-600 text-[#FED3D1] p-1.5 rounded-sm">
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
    </div>
  );
};

export default MyBooks;
