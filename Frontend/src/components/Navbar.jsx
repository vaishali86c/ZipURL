import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  Box,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';

import { assets } from '../assets';

const Navbar = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  // Functions to toggle between Login & Sign Up modals
  const openLogin = () => {
    setIsLoginOpen(true);
    setIsSignUpOpen(false);
  };

  const openSignUp = () => {
    setIsLoginOpen(false);
    setIsSignUpOpen(true);
  };

  return (
    <div className={`relative ${isLoginOpen || isSignUpOpen ? "blur-lg" : ""} transition-all duration-300`}>
      {/* Navbar */}
      <nav className="bg-blue-600 text-white p-4 flex justify-between items-center shadow-lg">
        <div className="sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl font-bold">ZipURL</div>

        {/* Create Account Button */}
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
        </button>
      </nav>

      {/* Background Blur Effect */}
      { (isLoginOpen || isSignUpOpen) && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-lg z-10"></div>
      )}

      {/* Signup Modal */}
      <Modal isOpen={isSignUpOpen} onClose={() => setIsSignUpOpen(false)}>
        <ModalOverlay />
        <ModalContent className="z-20">
          <ModalHeader className="flex items-center gap-2 flex-col">
            <span className='text-blue-600'>Sign Up</span>
            <img src={assets.login} alt="Icon" className="w-80 h-50" />
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <FormControl isRequired mb={4}>
                <FormLabel>Username</FormLabel>
                <Input placeholder="username" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Password</FormLabel>
                <Input placeholder="password" type="password" />
              </FormControl>
            </Box>
          </ModalBody>
          <ModalFooter className="flex items-center gap-4 flex-col">
            <Button
              style={{ backgroundColor: "rgb(37, 99, 235)", color: "white" }}
              className="text-2xl font-bold flex justify-center items-center w-full py-2"
            >
              SignUp
            </Button>
            <p className="text-sm">
              Already have an account?{" "}
              <span className="text-blue-600 cursor-pointer" onClick={openLogin}>
                Login
              </span>
            </p>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* Login Modal */}
      <Modal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)}>
        <ModalOverlay />
        <ModalContent className="z-20">
          <ModalHeader className="flex items-center gap-2 flex-col">
            <span className='text-blue-600'>Login</span>
            <img src={assets.login} alt="Icon" className="w-80 h-50" />
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <FormControl isRequired mb={4}>
                <FormLabel>Username</FormLabel>
                <Input placeholder="username" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Password</FormLabel>
                <Input placeholder="password" type="password" />
              </FormControl>
            </Box>
          </ModalBody>
          <ModalFooter className="flex items-center gap-4 flex-col">
            <Button
              style={{ backgroundColor: "rgb(37, 99, 235)", color: "white" }}
              className="text-2xl font-bold flex justify-center items-center w-full py-2"
            >
              Login
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Navbar;
