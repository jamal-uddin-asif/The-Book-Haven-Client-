import React from 'react';

const BookUpdateModal = ({modalRef, handleUpdate, updateBook}) => {

    return (
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

                      <button className="rounded-sm font-bold bg-slate-300 text-xl btn mt-4">
                        Update Now 
                      </button>
                    </fieldset>
                  </form>
                </div>
              </div>
              <form method="dialog">
                <button className="rounded-sm px-2 py-1  text-2xl">
                  X
                </button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    );
};

export default BookUpdateModal;