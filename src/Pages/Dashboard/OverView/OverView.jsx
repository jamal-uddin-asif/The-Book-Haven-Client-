import React, { useEffect, useState } from "react";
import { useAuth } from "../../../Hooks/useAuth";
import { useAxiosSecure } from "../../../Hooks/useAxiosSecure";
import { FiTrendingUp } from "react-icons/fi";
import { FaBook, FaSwatchbook } from "react-icons/fa6";
import {
  BarChart,
  Bar,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
  PieChart,
  Pie,
} from "recharts";
import MyContainer from "../../../Components/MyContainer/MyContainer";
import LoadingSpinner from "../../../Components/LoadingSpinner/LoadingSpinner";

const OverView = () => {
  const { user } = useAuth();
  const [mybooks, setMyBooks] = useState([]);
  const [totalBooks, setTotalBooks] = useState([]);
  const [countGenre, setCountGenre] = useState([]);

  const [loadingMybook, setLoadingMybook] = useState(true);
  const [loadingTotalBook, setLoadingTotalBooks] = useState(true);
  const [loadingGenre, setLoadingGenre] = useState(true);

  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    setLoadingMybook(true)
    axiosSecure.get(`/all-books?email=${user?.email}`).then((data) => {
      setMyBooks(data.data);
      setLoadingMybook(false)
    });
  }, [user, axiosSecure]);

  useEffect(() => {
    setLoadingTotalBooks(true)
    axiosSecure.get("/all-books").then((data) => {
      setTotalBooks(data.data);
      setLoadingTotalBooks(false)
    });
  }, [axiosSecure]);
  console.log({countGenre});

  useEffect(() => {
    setLoadingGenre(true)
    axiosSecure.get("/count-genre").then((data) => {
      setCountGenre(data.data);
      setLoadingGenre(false)
    });
  }, [axiosSecure]);

  if(loadingMybook || loadingTotalBook || loadingGenre) return <LoadingSpinner/> 
  return (
    <div className="p-3">
      <div>
        <div className="md:flex   justify-center gap-5 mt-10">
          <div className="w-full max-w-xl rounded-2xl border border-gray-200 bg-white dark:bg-base-200 p-5 shadow-sm">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100">
                  <span className="text-blue-600 font-semibold">◎</span>
                </div>
                <h3 className="text-sm font-medium ">My Books</h3>
              </div>

              <div>Last 30 day</div>
            </div>

            {/* Value */}
            <div className="mt-6 flex items-center gap-3">
              <h2 className="text-3xl font-bold  flex items-center gap-1">
                <FaBook />
                {mybooks?.result?.length}
              </h2>
            </div>

            {/* Subtitle */}
            <p className="mt-2 text-sm ">total availble books</p>
          </div>
          <div className="w-full max-w-xl rounded-2xl border border-gray-200 bg-white dark:bg-base-200 p-5 shadow-sm">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100">
                  <span className="text-blue-600 font-semibold">◎</span>
                </div>
                <h3 className="text-sm font-medium">Total Books</h3>
              </div>

              <div>Last 30 day</div>
            </div>

            {/* Value */}
            <div className="mt-6 flex items-center gap-3">
              <h2 className="text-3xl font-bold  flex items-center gap-1">
                <FaSwatchbook />
                {totalBooks?.result?.length}
              </h2>
            </div>

            {/* Subtitle */}
            <p className="mt-2 text-sm">total number of books</p>
          </div>
        </div>

        <div className="md:grid grid-cols-2 content-center bg-white dark:bg-base-300 mt-10 gap-4">
          <div className=" h-[300px] border mt-10">
            <BarChart
              style={{
                width: "100%",
                maxWidth: "700px",
                maxHeight: "70vh",
                aspectRatio: 1.618,
              }}
              responsive
              data={countGenre}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="_id" />
              <YAxis width="auto" />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#8884d8" isAnimationActive={true} />
              {/* <Bar dataKey="uv" fill="#82ca9d" isAnimationActive={isAnimationActive} /> */}
            </BarChart>
          </div>

          <div>
            <PieChart
              style={{
                width: "100%",
                maxWidth: "500px",
                maxHeight: "80vh",
                aspectRatio: 1,
              }}
              responsive
              margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
            >
              <Pie
                data={countGenre}
                dataKey="count"
                nameKey="_id"
                cx="50%"
                cy="50%"
                outerRadius="50%"
                fill="#8884d8"
                isAnimationActive={true}
              />
              <Pie
      data={countGenre}
      dataKey="count"
      nameKey="_id"
      cx="50%"
      cy="50%"
      innerRadius="60%"
      outerRadius="80%"
      fill="#82ca9d"
      label
      isAnimationActive={true}
    />
              <Tooltip />
              <Legend />
            </PieChart>
          </div>
        </div>
      </div>


     <div className="overflow-x-auto my-10 rounded-box border border-base-content/5 bg-base-100">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Genre</th>
        <th>Total</th>
      </tr>
    </thead>
    <tbody>
      {countGenre.map((genre,i)=>(
      <tr>
        <th>{i+1}</th>
        <td>{genre._id}</td>
        <td>{genre.count}</td>
      </tr>

      ))}
    </tbody>
  </table>
</div>

    </div>
  );
};

export default OverView;
