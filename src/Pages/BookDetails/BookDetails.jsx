import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useAxiosSecure } from "../../Hooks/useAxiosSecure";
import MyContainer from "../../Components/MyContainer/MyContainer";
import { useAuth } from "../../Hooks/useAuth";
import { FaStar } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { MdCategory } from "react-icons/md";

const BookDetails = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { id } = useParams();
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState([]);
  const [refresh, setRefresh] = useState(true)

 console.log(book)

  useEffect(() => {
    axiosSecure.get(`/bookDetails/${id}`).then((data) => {
      setBook(data.data);
      setLoading(false);
    });
  }, [id, axiosSecure,user, refresh]);

  // comment fetching
  useEffect(() => {
    axiosSecure.get(`/comments/${book?._id}`).then((data) => {
      setComments(data.data);
    });
  }, [axiosSecure, book]);

  const handleComment = (e) => {
    e.preventDefault();
    const comment = e.target.comment.value;
    const displayName = user.displayName;
    const photoURL =
      user.photoURL || "https://img.icons8.com/ios/50/user-male-circle--v1.png";

    const forPostComment = {
      displayName,
      photoURL,
      comment,
      book: book?._id,
      created_at: new Date().toLocaleDateString(),
    };

    axiosSecure.post("/comments", forPostComment).then((data) => {
      // console.log(data);
      setRefresh(!true)
      e.target.reset()
    });

  };

    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <title>Book Details | The Book Haven</title>
      <MyContainer>
        <div className="md:flex py-10  bg-blue-950/80 rounded-2xl mt-5 text-white">
          <div  className="flex-1 px-2">
            <img
              className="max-h-[400px] mx-auto"
              src={book.coverImage}
              alt=""
            />
          </div>
          <div  className="flex-1 max-h-screen overflow-scroll p-3">
            <div className="border-b pb-3">
              <h1 className="font-bold  text-3xl">{book.title}</h1>
              <h3>Author: {book.author}</h3>
            </div>

            <div className="bg-white/10">
              <div className=" flex items-center gap-1 text-white  px-3 rounded-sm">
                  <FaStar color="gold" />{book.rating}
              </div>
              <h1 className="flex items-center gap-1">  <MdCategory />{book.genre}</h1>
              <p className="flex items-center gap-1"><IoMdMail />{book.userEmail}</p>
              <div>summary: {book.summary}</div>
            </div>
          </div>
        </div>

        {/* comments  */}
        <div className="my-5 bg-linear-to-br from-fuchsia-400 to-gray-800 rounded-2xl p-2">
          <form onSubmit={handleComment}>
            <h1 className="border-b mb-4 my-heading py-4 text-2xl border-blue-700 text-gray-200 text-center">
              Comment about this book
            </h1>
            <div className="flex space-y-3 flex-col">
              <textarea
                name="comment"
                placeholder="Comment here...."
                cols={25}
                rows={4}
                className="border  p-2 border-blue-800 rounded-xl"
              ></textarea>
              <button className=" p-2 max-w-27 mx-auto rounded-sm  bg-blue-950 text-[#FED3D1] shadow-xl  opacity-65 hover:bg-green-500">
                Comment
              </button>
            </div>
          </form>

        </div>
          <div className="space-y-5 my-5 bg-blue-950 rounded-xl text-gray-300 p-3">
            {comments?.map((comment) => (
              <div>
                <div className="flex items-center gap-2 ">
                  <div className="border-2 w-10 rounded-full">
                    <img className="rounded-full" src={comment.photoURL} alt='' />
                  </div>
                  <h1 className="text-sm font-bold ">{comment.displayName}</h1>
                </div>

                <div className="text-sm ">
                  <p className="text-sm mb-2">{comment.created_at}</p>
                  <div>{comment.comment}</div>
                </div>
              </div>
            ))}
          </div>
      </MyContainer>
    </div>
  );
};

export default BookDetails;
