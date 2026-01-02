import React from "react";
import MyContainer from "../MyContainer/MyContainer";
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp, FaXTwitter, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="py-8 pt-5 text-white bg-blue-950">
        <title>Register | The Book Haven</title>
      <MyContainer>
        {/* top div  */}
        <div className="md:flex space-y-1 border-b pb-3 items-center justify-between">
          {/* left  */}
          <div className="flex items-center">
            <img
              className="w-10 h-10"
              src="https://img.icons8.com/plasticine/100/book.png"
              alt=""
            />
            <div className="">
              <span className="text-2xl ">H</span>aven
            </div>
          </div>

          {/* right  */}
          <div>
            <p>Add, explore, and cherish every book that inspires you.</p>
          </div>
        </div>

        {/* middle div  */}
        <div className="md:flex space-y-6 justify-between py-4 border-b ">
          <div>
            <h1 className="text-2xl border-b">Pages</h1>
            <ul className="text-gray-300 mt-2 ">
                <li>Home</li>
                <li>All books</li>
                <li>Add books</li>
                <li>My books</li>
                <li>LogIn</li>
                <li>Registration</li>
            </ul>
          </div>
          <div>
            <h1 className="text-2xl border-b ">About us</h1>
            <div className="text-gray-300 mt-2 space-y-2">
                <p>Corporate Profile</p>
                <p>Our team</p>
                <p>Portfolio</p>
                <p>Our office</p>
            </div>
          </div>
          <div>
            <h1 className="text-2xl border-b">Quick Connect</h1>
            <div className="mt-2 space-y-2">
                <div className="flex items-center space-x-1.5">
                    <FaFacebook />
                    <p>Facebook</p>
                </div>
                <div className="flex items-center space-x-1.5">
                    <FaXTwitter />
                    <p>Twitter</p>
                </div>
                <div className="flex items-center space-x-1.5">
                    <FaInstagram></FaInstagram>
                    <p>Instagram</p>
                </div>
                <div className="flex items-center space-x-1.5">
                    <FaLinkedin></FaLinkedin>
                    <p>Linkedin</p>
                </div>
                <div className="flex items-center space-x-1.5">
                    <FaYoutube></FaYoutube>
                    <p>Youtube</p>
                </div>
                <div className="flex items-center space-x-1.5">
                    <FaWhatsapp></FaWhatsapp>
                    <p>Whatsapp</p>
                </div>
            </div>
          </div>
          <div>
            <h1 className="text-2xl border-b">Latest books</h1>
            <div className="mt-2 space-y-2">
                <p>The Power of Money</p>
                <p>The Power of Positive thinking</p>
                <p>How to talk to anyone</p>
                <p></p>
            </div>
          </div>    
        </div>

        {/* bottom div  */}
        <div className="text-center pt-2 text-sm ">
            © 2025 The Book Haven. All rights reserved.
        </div>
      </MyContainer>
    </div>
  );
};

export default Footer;
