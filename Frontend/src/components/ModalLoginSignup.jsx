import React, { useContext, useState } from 'react'
import axios from 'axios'
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
import { UrlContext } from '../context/context';
import { toast } from 'react-toastify';

const ModalLoginSignup = () => {

  const { isLoginOpen, isSignUpOpen, setIsSignUpOpen, setIsLoginOpen, openLogin, backendUrl, setToken, token } = useContext(UrlContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(`${backendUrl}/api/v1/user/register`, {username, password})
      if (res.data.success) {
        setToken(res.data.data)
        localStorage.setItem("token", res.data.data)
        toast.success(res.data.message)
        setIsSignUpOpen(false)
      } else {
        toast.error(res.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(`${backendUrl}/api/v1/user/login`, {username, password})
      if (res.data.success) {
        setToken(res.data.data)
        localStorage.setItem("token", res.data.data)
        toast.success(res.data.message)
        setIsLoginOpen(false)
      } else {
        toast.error(res.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  

  return (
    <>
      <div>
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
              <FormControl onChange={(e) => {setUsername(e.target.value)}} isRequired mb={4}>
                <FormLabel>Username</FormLabel>
                <Input placeholder="username" />
              </FormControl>
              <FormControl onChange={(e) => {setPassword(e.target.value)}} isRequired>
                <FormLabel>Password</FormLabel>
                <Input placeholder="password" type="password" />
              </FormControl>
            </Box>
          </ModalBody>
          <ModalFooter className="flex items-center gap-4 flex-col">
            <Button
              style={{ backgroundColor: "rgb(37, 99, 235)", color: "white" }}
              className="text-2xl font-bold flex justify-center items-center w-full py-2"
              onClick={handleSignUp}
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
              <FormControl onChange={(e) => {setUsername(e.target.value)}} isRequired mb={4}>
                <FormLabel>Username</FormLabel>
                <Input placeholder="username" />
              </FormControl>
              <FormControl onChange={(e) => {setPassword(e.target.value)}} isRequired>
                <FormLabel>Password</FormLabel>
                <Input placeholder="password" type="password" />
              </FormControl>
            </Box>
          </ModalBody>
          <ModalFooter className="flex items-center gap-4 flex-col">
            <Button
              style={{ backgroundColor: "rgb(37, 99, 235)", color: "white" }}
              className="text-2xl font-bold flex justify-center items-center w-full py-2"
              onClick={handleLogin}
            >
              Login
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
    </>
  )
}

export default ModalLoginSignup