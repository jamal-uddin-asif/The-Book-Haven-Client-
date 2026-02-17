import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { useAuth } from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { FaGoogle, FaEnvelope, FaLock, FaUserShield, FaEye, FaEyeSlash } from "react-icons/fa6";

const Login = () => {
  const { signInUser, googleSignIn, setLoading } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state || "/";

  const [emailErr, setEmailErr] = useState("");
  const [passErr, setPassErr] = useState("");
  const [showPassword, setShowPassword] = useState(false); // Toggle State

  const [useEmail, setUserEmail] = useState("");
  const [userPass, setUserPass] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setPassErr("");
    setEmailErr("");

    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!email) return setEmailErr("Please enter your email");
    if (!password) return setPassErr("Please enter your password");

    signInUser(email, password)
      .then(() => {
        setLoading(false);
        navigate(from);
        toast.success("Welcome back!");
      })
      .catch((err) => toast.error(err.code));
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(() => {
        setLoading(false);
        navigate(from);
        toast.success("Google sign-in successful");
      })
      .catch((err) => toast.error(err.code));
  };

  const handleCredentials = () => {
    setUserEmail("as@if.com");
    setUserPass("Asdfjk@2");
    toast("Demo credentials filled!", { icon: "📝" });
  };

  return (
    <div className="flex px-4 dark:bg-slate-950 bg-slate-50 justify-center items-center min-h-screen relative overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-700"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md z-10"
      >
        <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-white/20 dark:border-slate-800 rounded-[2.5rem] shadow-2xl p-8 md:p-10">
          
          <div className="text-center mb-8">
            <h1 className="text-3xl font-black uppercase tracking-tighter text-slate-900 dark:text-white">
              The Book <span className="text-blue-600">Haven</span>
            </h1>
            <p className="text-slate-500 font-medium mt-2">Sign in to your account</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            {/* Email Field */}
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4 block">Email Address</label>
              <div className="relative">
                <FaEnvelope className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  key={useEmail}
                  defaultValue={useEmail}
                  type="email"
                  name="email"
                  className="w-full pl-12 pr-5 py-4 bg-slate-100 dark:bg-slate-800 border-none rounded-2xl focus:ring-2 focus:ring-blue-500/20 outline-none dark:text-white transition-all"
                  placeholder="name@example.com"
                />
              </div>
              {emailErr && <p className="text-red-500 text-xs mt-1 ml-4 font-bold">{emailErr}</p>}
            </div>

            {/* Password Field with Toggle */}
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4 block">Password</label>
              <div className="relative">
                <FaLock className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  key={userPass}
                  defaultValue={userPass}
                  type={showPassword ? "text" : "password"} // Dynamic Type
                  name="password"
                  className="w-full pl-12 pr-14 py-4 bg-slate-100 dark:bg-slate-800 border-none rounded-2xl focus:ring-2 focus:ring-blue-500/20 outline-none dark:text-white transition-all"
                  placeholder="••••••••"
                />
                {/* Toggle Button */}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-blue-600 transition-colors p-1"
                >
                  {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                </button>
              </div>
              {passErr && <p className="text-red-500 text-xs mt-1 ml-4 font-bold">{passErr}</p>}
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-black uppercase tracking-[0.2em] rounded-2xl shadow-lg shadow-blue-500/30 transition-all mt-4"
            >
              Sign In
            </motion.button>

            {/* Divider */}
            <div className="flex items-center gap-4 my-6">
              <div className="h-[1px] bg-slate-200 dark:bg-slate-800 flex-1"></div>
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Social Login</span>
              <div className="h-[1px] bg-slate-200 dark:bg-slate-800 flex-1"></div>
            </div>

            {/* Demo & Google Buttons */}
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={handleGoogleSignIn}
                className="flex items-center justify-center gap-3 py-3 border border-slate-200 dark:border-slate-800 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all font-bold text-sm"
              >
                <FaGoogle className="text-red-500" /> Google
              </button>
              
              <button
                type="button"
                onClick={handleCredentials}
                className="flex items-center justify-center gap-3 py-3 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 border border-emerald-100 dark:border-emerald-500/20 rounded-2xl hover:bg-emerald-100 dark:hover:bg-emerald-500/20 transition-all font-bold text-sm"
              >
                <FaUserShield /> Demo
              </button>
            </div>

            <p className="text-center text-sm font-medium text-slate-500 mt-8">
              New to the haven?{" "}
              <Link to="/auth/register" className="text-blue-600 font-black hover:underline tracking-tight">
                Create an account
              </Link>
            </p>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;