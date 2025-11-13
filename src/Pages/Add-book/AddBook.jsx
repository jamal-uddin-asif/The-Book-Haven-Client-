import React, { useEffect } from "react";
import boy from "../../assets/boy.jpg";
import MyContainer from "../../Components/MyContainer/MyContainer";
import { useAuth } from "../../Hooks/useAuth";
import { useAxiosSecure } from "../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";

import Aos from "aos";
import "aos/dist/aos.css";

const AddBook = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  // console.log(user)

      // Animaton 
      
      useEffect(()=>{
        Aos.init();
      },[])

  const handleAddBook = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const author = e.target.author.value;
    const genre = e.target.genre.value;
    const rating = e.target.rating.value;
    const coverImage = e.target.coverImage.value;
    const summary = e.target.summary.value;
    const userEmail = user?.email;
    const userName = user?.displayName;
    const create_at = new Date();

    // console.log({title, author, genre, rating, coverImage, summary, userEmail, userName, create_at})

    if (!title || !author || !genre || !rating || !coverImage || !summary) {
      toast.error("Fill the form please");
      return;
    }
    const newBook = {
      title,
      author,
      genre,
      rating,
      coverImage,
      userEmail,
      userName,
      create_at,
      summary,
    };

    axiosSecure.post("/books", newBook).then((data) => {
      // console.log(data)
      e.target.reset();
      toast.success("Book Added");
    });
  };

  
  return (
    <div className="">
      <MyContainer>
        <div className="my-5 flex justify-around  rounded-2xl bg-blue-950/80 min-h-screen :">
          <div className="md:flex gap-7 p-2   justify-center items-center  min-h-screen">
            <div
              data-aos="fade-right"
              className=" card   bg-white/10 w-full max-w-sm shrink-0 "
            >
              <h1 className="text-blue-900 text-center py-3 text-2xl font-bold  my-heading ">
                Add your book
              </h1>
              <form onSubmit={handleAddBook} className="px-5 pb-5 ">
                <fieldset className="fieldset">
                  <label className="label text-gray-300">Title</label>
                  <input
                    type="text"
                    name="title"
                    className="input   focus:outline-0 rounded-xl "
                    placeholder="Title"
                  />

                  <label className="label text-gray-300">Author</label>
                  <input
                    type="text"
                    name="author"
                    className="input focus:outline-0 rounded-xl"
                    placeholder="Author"
                  />

                  {/* genre  */}
                  <div className="flex justify-around">
                    <div>
                      <label className="label text-gray-300">Genre</label>
                      <select
                        defaultValue="Pick a font"
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
                      <label className="label text-gray-300">Rating</label>
                      <select
                        defaultValue="Pick a font"
                        className="select "
                        name="rating"
                      >
                        <option disabled={true}>Pick one</option>
                        <option value="1">Rating 1</option>
                        <option value="2">Rating 2</option>
                        <option value="3">Rating 3 </option>
                        <option value="4">Rating 4</option>
                        <option value="5">Rating 5</option>
                      </select>
                    </div>
                  </div>

                  <label className="label text-gray-300">Cover Image</label>
                  <input
                    type="url"
                    name="coverImage"
                    className="input focus:outline-0 rounded-xl"
                    placeholder="Image URL"
                  />

                  <label className="label text-gray-300">Summary</label>
                  <textarea
                    className="bg-white rounded-2xl p-2"
                    name="summary"
                    rows={8}
                    cols={9}
                    id=""
                  ></textarea>

                  <button className="text-[#5d806a] rounded-full text-xl btn bg-linear-to-br from-[#FED3D1] to-[#a58c8b] mt-4">
                    Add Book
                  </button>
                </fieldset>
              </form>
            </div>

            {/* righ side  */}
            <div  data-aos="fade-left" className="flex-1">
              <img
                className="max-h-[600px] rounded-2xl md:block hidden"
                src={boy}
                alt=""
              />
            </div>
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default AddBook;
