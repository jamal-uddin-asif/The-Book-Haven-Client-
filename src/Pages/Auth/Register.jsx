import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";
import { auth } from "../../Firebase/Firebase.config";
import { motion } from "framer-motion";
import { FaGoogle, FaEnvelope, FaLock, FaUser, FaImage, FaEye, FaEyeSlash } from "react-icons/fa6";

const Register = () => {
  const { createUser, googleSignIn, setLoading } = useAuth();
  const navigate = useNavigate();

  const [passErr, setPassErr] = useState("");
  const [nameErr, setNameErr] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [photoUrlErr, setPhotoUrlErr] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const passRegEx = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

  const handleRegister = (e) => {
    e.preventDefault();
    setPassErr("");
    setEmailErr("");
    setNameErr("");
    setPhotoUrlErr("");

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!name) return setNameErr("Please enter your name");
    if (!photo) return setPhotoUrlErr("Please enter your photo URL");
    if (!email) return setEmailErr("Please enter your email");
    if (!passRegEx.test(password)) {
      return setPassErr("Password must be 6+ chars with 1 uppercase & 1 lowercase");
    }

    createUser(email, password)
      .then((result) => {
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        }).then(() => {
          setLoading(false);
          toast.success("Welcome to the Haven!");
          navigate("/");
        });
      })
      .catch((err) => {
        toast.error(err.code);
        setLoading(false);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(() => {
        setLoading(false);
        navigate("/");
        toast.success("Signed in with Google!");
      })
      .catch((err) => toast.error(err.code));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex px-4 dark:bg-slate-950 bg-slate-50 justify-center items-center min-h-screen relative overflow-hidden py-10">
      <title>Register | The Book Haven</title>

      {/* Background Blobs for consistency */}
      <div className="absolute top-[-10%] left-[-10%] w-72 h-72 bg-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse delay-700"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md z-10"
      >
        <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-white/20 dark:border-slate-800 rounded-[2.5rem] shadow-2xl p-8 md:p-10">
          
          <div className="text-center mb-8">
            <h1 className="text-3xl font-black uppercase tracking-tighter text-slate-900 dark:text-white">
              Join the book<span className="text-blue-600">Haven</span>
            </h1>
            <p className="text-slate-500 font-medium mt-2">Create your reader profile</p>
          </div>

          <form onSubmit={handleRegister} className="space-y-4">
            {/* Name Field */}
            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4 block">Full Name</label>
              <div className="relative">
                <FaUser className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  name="name"
                  className="w-full pl-12 pr-5 py-3.5 bg-slate-100 dark:bg-slate-800 border-none rounded-2xl focus:ring-2 focus:ring-blue-500/20 outline-none dark:text-white transition-all"
                  placeholder="John Doe"
                />
              </div>
              {nameErr && <p className="text-red-500 text-[10px] ml-4 font-bold">{nameErr}</p>}
            </div>

            {/* Photo URL Field */}
            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4 block">Photo URL</label>
              <div className="relative">
                <FaImage className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  name="photo"
                  className="w-full pl-12 pr-5 py-3.5 bg-slate-100 dark:bg-slate-800 border-none rounded-2xl focus:ring-2 focus:ring-blue-500/20 outline-none dark:text-white transition-all"
                  placeholder="https://image.link"
                />
              </div>
              {photoUrlErr && <p className="text-red-500 text-[10px] ml-4 font-bold">{photoUrlErr}</p>}
            </div>

            {/* Email Field */}
            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4 block">Email</label>
              <div className="relative">
                <FaEnvelope className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="email"
                  name="email"
                  className="w-full pl-12 pr-5 py-3.5 bg-slate-100 dark:bg-slate-800 border-none rounded-2xl focus:ring-2 focus:ring-blue-500/20 outline-none dark:text-white transition-all"
                  placeholder="john@example.com"
                />
              </div>
              {emailErr && <p className="text-red-500 text-[10px] ml-4 font-bold">{emailErr}</p>}
            </div>

            {/* Password Field with Toggle */}
            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4 block">Password</label>
              <div className="relative">
                <FaLock className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="w-full pl-12 pr-14 py-3.5 bg-slate-100 dark:bg-slate-800 border-none rounded-2xl focus:ring-2 focus:ring-blue-500/20 outline-none dark:text-white transition-all"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-blue-600 p-1"
                >
                  {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                </button>
              </div>
              {passErr && <p className="text-red-500 text-[10px] ml-4 font-bold">{passErr}</p>}
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-black uppercase tracking-[0.2em] rounded-2xl shadow-lg shadow-blue-500/30 transition-all mt-4"
            >
              Register
            </motion.button>

            <div className="flex items-center gap-4 my-4">
              <div className="h-[1px] bg-slate-200 dark:bg-slate-800 flex-1"></div>
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Or sign up with</span>
              <div className="h-[1px] bg-slate-200 dark:bg-slate-800 flex-1"></div>
            </div>

            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="w-full flex items-center justify-center gap-3 py-3 border border-slate-200 dark:border-slate-800 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all font-bold text-sm"
            >
              <FaGoogle className="text-red-500" /> Google
            </button>

            <p className="text-center text-sm font-medium text-slate-500 mt-6">
              Already a member?{" "}
              <Link to="/auth/login" className="text-blue-600 font-black hover:underline tracking-tight">
                Login here
              </Link>
            </p>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;