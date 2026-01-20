import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useAxiosSecure } from "../../Hooks/useAxiosSecure";
import MyContainer from "../../Components/MyContainer/MyContainer";
import { useAuth } from "../../Hooks/useAuth";
import { FaStar } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { MdCategory } from "react-icons/md";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import toast from "react-hot-toast";

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
    if(!user) return toast.error('Please signIn')
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

  if(loading) return <LoadingSpinner/>

  return (
    <div className="px-1">
      <title>Book Details | The Book Haven</title>
      <MyContainer>
        <div className="md:flex py-10   bg-blue-950/80 rounded-2xl mt-5 text-white">
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
  {/* --- Comment Section Start --- */}
<div className="my-10 max-w-4xl mx-auto">
  <div className="light:bg-white dark:bg-dark rounded-2xl shadow-sm   overflow-hidden">
    
    {/* Form Section */}
    <div className="p-6 md:p-8 border-b border-slate-100 dark:bg-base-300 bg-slate-50/50">
      <h2 className="text-2xl font-bold light:text-slate-800 mb-6 flex items-center gap-2">
        Reader Discussions 
        <span className="text-sm font-normal light:text-slate-500  bg-base-100 px-2 py-1 rounded-full border">
          {comments?.length || 0}
        </span>
      </h2>
      
      <form onSubmit={handleComment} className="space-y-4">
        <textarea
          name="comment"
          required
          placeholder="Write your thoughts about this book..."
          rows={3}
          className="w-full p-4   border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none shadow-sm"
        ></textarea>
        
        <div className="flex justify-end">
          <button className="bg-blue-900 hover:bg-blue-700 text-white px-8 py-2.5 rounded-lg font-semibold transition-all shadow-md hover:shadow-blue-200 active:scale-95">
            Post Comment
          </button>
        </div>
      </form>
    </div>

    {/* Comments List */}
    <div className="p-6 md:p-8 space-y-6 bg-white dark:bg-base-300">
      {comments && comments.length > 0 ? (
        comments.map((comment, index) => (
          <div key={index} className="flex gap-4 group">
            {/* User Avatar */}
            <div className="flex-shrink-0">
              <img 
                className="w-12 h-12 rounded-full border-2  shadow-sm object-cover" 
                src={comment.photoURL} 
                alt={comment.displayName} 
              />
            </div>

            {/* Comment Content */}
            <div className="flex-1">
              <div className="bg-slate-50 dark:bg-base-300 p-4 rounded-2xl rounded-tl-none group-hover:bg-slate-100 group-hover:text-black transition-colors">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-bold text-sm md:text-base">
                    {comment.displayName}
                  </h4>
                  <span className="text-[12px] light:text-slate-400 dark:text-white font-medium">
                    {comment.created_at}
                  </span>
                </div>
                <p className="light:text-slate-600 text-sm md:text-base leading-relaxed">
                  {comment.comment}
                </p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="text-center py-10">
          <p className="text-slate-400 italic">No comments yet. Be the first to share your thoughts!</p>
        </div>
      )}
    </div>
  </div>
</div>
{/* --- Comment Section End --- */}
      </MyContainer>
    </div>
  );
};

export default BookDetails;
