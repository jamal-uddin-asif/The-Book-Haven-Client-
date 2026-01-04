import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";
import { auth } from "../../Firebase/Firebase.config";

const Register = () => {
  const {createUser, googleSignIn, setLoading} = useAuth()

  const [passErr , setPassErr] = useState('')
  const [nameErr , setNameErr] = useState('')
  const [emailErr , setEmailErr] = useState('')
  const [photoUrlErr , setPhotoUrlErr] = useState('')
  const navigate = useNavigate()

const passRegEx = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;


// console.log(!passRegEx.test('sfkdksllksA'))
  
  const handleRegister = (e) =>{
    e.preventDefault();
    setPassErr('')
    setEmailErr('')
    setNameErr('')
    setPhotoUrlErr('')

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    


    
    
    if(!name){
      setNameErr('Please enter your name')
      return
    }
    if(!photo){
      setPhotoUrlErr('Please enter your photo Url')
      return
    }
    if(!email){
      setEmailErr('Please enter your email')
      return
    }
    if(!passRegEx.test(password)){
      // toast.error('Password not valid')
      setPassErr("Password must 6 character with 1 upperCase 1 lowerCase ")
      return
    }



    createUser(email, password)
    .then(result=>{
      // console.log(result)
      
      updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo
      }).then(()=>{
        // console.log("Profile updated")
      })

      setLoading(false)
      toast.success("Registration successful")
      navigate('/')
    })
    .catch(err=>{
      toast.error(err.code)
    })
  }

   const handleGoogleSignIn = () =>{
    googleSignIn()
    .then(result=>{
      // console.log(result)
      setLoading(false)
      navigate('/')
      toast.success("Signin successful")
    })
    .catch(err=>{
      toast.error(err.code)
    })


  }
      useEffect(() => {
      window.scrollTo(0, 0);
    }, []);


  return (
    <div className="flex p-2 dark:from-slate-900 dark:to-slate-800 bg-gradient-to-br from-indigo-50 to-purple-100  justify-center items-center  min-h-screen">
     <title>Register | The Book Haven</title>
        <div className=" card   bg-white/60 dark:bg-base-300 w-full max-w-sm shrink-0 ">
            <h1 className="text-center py-3 text-2xl font-bold text-shadow-blue-950 my-heading ">Register now</h1>
          <form onSubmit={handleRegister} className="px-5 pb-5 ">
            <fieldset className="fieldset">
                {/* name  */}
              <label className="label">Name</label>
              <input type="text" name="name" className="input focus:outline-0 rounded-full " placeholder="Your Name" />
               <p className="text-red-500">{nameErr}</p>
                {/* photo  */}
              <label className="label">Photo</label>
              <input type="text" name="photo" className="input focus:outline-0 rounded-full" placeholder="PhotoURL" />
               <p className="text-red-500">{photoUrlErr}</p>
                {/* email  */}
              <label className="label">Email</label>
              <input type="email" name="email" className="input focus:outline-0 rounded-full" placeholder="Email" />
               <p className="text-red-500">{emailErr}</p>
                {/* password  */}
              <label className="label">Password</label>
              <input type="password" name="password" className="input focus:outline-0 rounded-full" placeholder="Password" />
              <p className="text-red-500">{passErr}</p>
              <button  className="text-[#5d806a] rounded-full text-xl btn bg-blue-900 text-white mt-4">Register</button>
                  {/* Google */}
            <button onClick={handleGoogleSignIn} type="button" className="btn rounded-full bg-white/40 text-black border-[#e5e5e5]">
              <svg
                aria-label="Google logo"
                width="25"
                height="25"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>
                <p className="text-center text-gray-500">Have an account? <Link  to={'/auth/login'} className="text-blue-600 underline">Login</Link></p>
              
            </fieldset>
          </form>
        </div>
      </div>

  );
};

export default Register;
