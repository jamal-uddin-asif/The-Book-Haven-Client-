import React, { useEffect, useState } from "react";
import { useAuth } from "../../../Hooks/useAuth";
import { useAxiosSecure } from "../../../Hooks/useAxiosSecure";
import { FaBook, FaSwatchbook, FaChartPie, FaTableList } from "react-icons/fa6";
import { motion } from "framer-motion";
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
  Cell,
} from "recharts";
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

  // Chart Colors
  const COLORS = ["#10b981", "#3b82f6", "#8b5cf6", "#f59e0b", "#ef4444"];

  useEffect(() => {
    setLoadingMybook(true);
    axiosSecure.get(`/all-books?email=${user?.email}`).then((data) => {
      setMyBooks(data.data);
      setLoadingMybook(false);
    });
  }, [user, axiosSecure]);

  useEffect(() => {
    setLoadingTotalBooks(true);
    axiosSecure.get("/all-books").then((data) => {
      setTotalBooks(data.data);
      setLoadingTotalBooks(false);
    });
  }, [axiosSecure]);

  useEffect(() => {
    setLoadingGenre(true);
    axiosSecure.get("/count-genre").then((data) => {
      setCountGenre(data.data);
      setLoadingGenre(false);
    });
  }, [axiosSecure]);

  // Animation Variants
  const containerVars = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVars = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  if (loadingMybook || loadingTotalBook || loadingGenre)
    return <LoadingSpinner />;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVars}
      className="p-4 md:p-8 max-w-7xl mx-auto space-y-10 min-h-screen"
    >
      {/* Header Section */}
      <motion.div variants={itemVars} className="flex flex-col gap-2">
        <h1 className="text-4xl font-black uppercase tracking-tighter text-slate-900 dark:text-white">
          Library <span className="text-emerald-500">Analytics</span>
        </h1>
        <p className="text-slate-500 font-medium">
          Welcome back, {user?.displayName}. Here is what's happening today.
        </p>
      </motion.div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          {
            label: "My Personal Books",
            val: mybooks?.result?.length || 0,
            icon: <FaBook />,
            bg: "bg-blue-500/10 text-blue-600",
            border: "border-blue-100 dark:border-blue-900/30",
          },
          {
            label: "Platform Global Total",
            val: totalBooks?.result?.length || 0,
            icon: <FaSwatchbook />,
            bg: "bg-emerald-500/10 text-emerald-600",
            border: "border-emerald-100 dark:border-emerald-900/30",
          },
        ].map((stat, i) => (
          <motion.div
            key={i}
            variants={itemVars}
            whileHover={{ y: -5 }}
            className={`p-8 bg-white dark:bg-slate-900 border ${stat.border} rounded-[2rem] shadow-sm flex items-center justify-between`}
          >
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-2">
                {stat.label}
              </p>
              <h2 className="text-5xl font-black text-slate-900 dark:text-white tracking-tighter">
                {stat.val}
              </h2>
            </div>
            <div
              className={`h-16 w-16 rounded-2xl ${stat.bg} flex items-center justify-center text-3xl`}
            >
              {stat.icon}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Charts Section */}
      <motion.div
        variants={itemVars}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
      >
        {/* Bar Chart */}
        <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800">
          <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-8 flex items-center gap-2">
            <span className="w-2 h-2 bg-emerald-500 rounded-full"></span> Genre
            Distribution
          </h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={countGenre}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  strokeOpacity={0.1}
                />
                <XAxis
                  dataKey="_id"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fontWeight: "bold" }}
                />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip
                  cursor={{ fill: "transparent" }}
                  contentStyle={{
                    borderRadius: "15px",
                    border: "none",
                    boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)",
                  }}
                />
                <Bar
                  dataKey="count"
                  fill="#10b981"
                  radius={[8, 8, 0, 0]}
                  barSize={40}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pie Chart */}
        <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800">
          <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-8 flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span> Genre
            Shares
          </h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={countGenre}
                  innerRadius={70}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="count"
                  nameKey="_id"
                  stroke="none"
                >
                  {countGenre.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend iconType="circle" />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </motion.div>

      {/* Table Section */}
      <motion.div
        variants={itemVars}
        className="bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 overflow-hidden shadow-sm"
      >
        <div className="px-8 py-6 border-b border-slate-50 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50 flex items-center gap-3">
          <FaTableList className="text-emerald-500" />
          <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-600 dark:text-slate-300">
            Detailed Inventory Breakdown
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-[10px] uppercase tracking-widest text-slate-400">
                <th className="px-8 py-5">#</th>
                <th className="px-8 py-5">Genre Category</th>
                <th className="px-8 py-5 text-right">Available Volume</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
              {countGenre.map((genre, i) => (
                <tr
                  key={i}
                  className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                >
                  <td className="px-8 py-4 font-bold text-slate-400">
                    {i + 1}
                  </td>
                  <td className="px-8 py-4 font-black text-slate-700 dark:text-slate-200">
                    {genre._id}
                  </td>
                  <td className="px-8 py-4 text-right">
                    <span className="bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 px-4 py-1 rounded-full text-xs font-black">
                      {genre.count} Books
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default OverView;
