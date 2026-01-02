import React from 'react';
import { BiSolidBookAdd } from "react-icons/bi";
import { FaBookOpenReader } from "react-icons/fa6";
import { MdAutoDelete } from "react-icons/md";
import { TiEdit } from "react-icons/ti";
const FeatureOfThisWeb = () => {
    return (
          <div className="">
            <h1 className="border-b pb-4 my-heading py-4 text-2xl">
              Feature of this web
            </h1>
            <div className="sm:flex  text-center justify-center gap-7 py-6">
              <div className="bg-linear-to-br from-green-400 to-green-800 p-6 rounded-2xl hover:scale-105 transition ease-in-out text-white">
                <div className="flex justify-center">
                  <FaBookOpenReader size={30} />
                </div>
                Read book
              </div>
              <div className="bg-linear-to-br from-orange-400 to-orange-700 p-6 rounded-2xl hover:scale-105 transition ease-in-out text-white">
                <div className="flex justify-center">
                  <BiSolidBookAdd size={30} />
                </div>
                Add book
              </div>
              <div className="bg-linear-to-br from-yellow-300 to-yellow-600 p-6 rounded-2xl hover:scale-105 transition ease-in-out text-white">
                <div className="flex justify-center">
                  <TiEdit size={30} />
                </div>
                Edit book
              </div>
              <div className="bg-linear-to-br from-red-500 to-red-800 p-6 rounded-2xl hover:scale-105 transition ease-in-out text-white">
                <div className="flex justify-center">
                  <MdAutoDelete size={30} />
                </div>
                Delete book
              </div>
            </div>
          </div>
    );
};

export default FeatureOfThisWeb;