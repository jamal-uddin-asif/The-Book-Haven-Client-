import React from 'react';
import { Link } from 'react-router';

const Logo = () => {
    return (
        <div>
              <Link to={'/'} className="my-heading flex items-center font-bold md:text-xl">
              <img
                className="w-10 h-10"
                src="https://img.icons8.com/plasticine/100/book.png"
                alt=""
              />
              <div className="text-gray-300">
                <span className="text-2xl text-emerald-400">H</span>aven
              </div>
            </Link>
        </div>
    );
};

export default Logo;