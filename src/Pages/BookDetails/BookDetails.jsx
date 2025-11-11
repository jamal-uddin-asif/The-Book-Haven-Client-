import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useAxiosSecure } from "../../Hooks/useAxiosSecure";
import MyContainer from "../../Components/MyContainer/MyContainer";

const BookDetails = () => {
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(book);
  useEffect(() => {
    axiosSecure.get(`/bookDetails/${id}`).then((data) => {
      setBook(data.data);
      setLoading(false);
    });
  }, [id]);

  return (
    <div>
      <MyContainer>
        <div className="md:flex py-10 bg-blue-950/80 rounded-2xl mt-5 text-white">
          <div className="flex-1 px-2">
            <img className="max-h-[400px] mx-auto" src={book.coverImage} alt="" />
          </div>
          <div className="flex-1 overflow-scroll p-3">
            <div className="border-b pb-3">
              <h1 className="font-bold  text-3xl">{book.title}</h1>
              <h3>Author: {book.author}</h3>
            </div>

            <div className="bg-white/10">
                <h1 >Genre: {book.genre}</h1>
                <p>Create by: {book.userEmail}</p>
                <div className="bg-yellow-500 text-blue-800 inline px-3 rounded-sm">Rating: {book.rating}</div>
                <div>
                    summary: {book.summary}
                </div>
                
            </div>
          </div>
        </div>

        {/* comments  */}
        <div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam in cumque nemo, explicabo est dignissimos rerum harum illo quidem repellendus accusamus voluptate eius repudiandae reiciendis soluta exercitationem ducimus placeat voluptatem animi, eveniet vero? Voluptatum debitis quas illum dolores facilis impedit asperiores distinctio ullam amet aut, quam facere unde explicabo, ducimus animi maiores doloribus quod incidunt enim voluptatibus. Sapiente, facilis qui corrupti quos dolores fuga perferendis vero aut corporis, eum ipsum dolorem reprehenderit debitis iure enim possimus consectetur, error non atque? Temporibus, neque architecto laborum rem magni saepe sunt vel labore quidem excepturi dignissimos eveniet! Aut deserunt repellendus sapiente quis, alias obcaecati in harum magnam impedit quo nesciunt quidem pariatur exercitationem eum consectetur perspiciatis soluta dolores eos quod facere voluptatem aliquam, ullam nisi. Sit, necessitatibus adipisci at ducimus cupiditate excepturi soluta molestias tempora minima sequi optio natus maxime est reiciendis sunt eaque nostrum quo similique corrupti debitis culpa neque? Deserunt quaerat nulla tempore inventore laboriosam maiores harum! Cumque non id earum? Sapiente accusamus illum ducimus qui alias eligendi quis, voluptates vitae quia iste culpa nobis, minus, nesciunt enim nihil reiciendis at magnam ullam totam nulla deserunt dolor ad voluptate! Hic ducimus necessitatibus id repellat, consectetur temporibus. Similique vitae deserunt cum asperiores?
        </div>
      </MyContainer>
    </div>
  );
};

export default BookDetails;
