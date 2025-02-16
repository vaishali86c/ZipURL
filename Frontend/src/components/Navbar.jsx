import React, { useContext } from 'react';
import { UrlContext } from '../context/context';
import ModalLoginSignup from './ModalLoginSignup';


const Navbar = () => {

  const { isLoginOpen, isSignUpOpen, openSignUp, token, setToken } = useContext(UrlContext);

  return (
    <div className={`relative ${isLoginOpen || isSignUpOpen ? "blur-lg" : ""} transition-all duration-300`}>
      {/* Navbar */}
      <nav className="bg-blue-600 text-white p-4 flex justify-between items-center shadow-lg">
        <div className="sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl font-bold">ZipURL</div>

        {/* Create Account Button */}
        {token === "" ?
         <button
          onClick={openSignUp}
          className="bg-white text-blue-600 px-3 py-1.5 text-sm 
                    sm:px-4 sm:py-2 sm:text-base 
                    md:px-5 md:py-2 md:text-lg 
                    lg:px-5 lg:py-2 lg:text-xl 
                    rounded-lg font-semibold 
                    hover:bg-gray-100 transition"
        >
          Create Account
        </button> :
        <button
        onClick={() => {
          localStorage.setItem("token", "")
          setToken("")
        }}
        className="bg-red-500 text-white px-3 py-1.5 text-sm 
                  sm:px-4 sm:py-2 sm:text-base 
                  md:px-5 md:py-2 md:text-lg 
                  lg:px-5 lg:py-2 lg:text-xl 
                  rounded-lg font-semibold 
                  hover:bg-gray-100 transition"
      >
        Logout
      </button>
      }
      </nav>
      {token === "" ? 
      <ModalLoginSignup />
      : null
      }
    </div>
  );
};

export default Navbar;
