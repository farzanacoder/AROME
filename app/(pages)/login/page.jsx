'use client'
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { HiEye } from "react-icons/hi";
import { IoMdEyeOff } from "react-icons/io";
import Container from "../../components/Container";
import Flex from "../../components/Flex";
import { Flip, toast } from "react-toastify";
import { BeatLoader } from "react-spinners";
import Link from "next/link";

const Login = () => {
  const [eye, setEye] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    password: null,
    username: null,
  });

  const [allErrors, setAllErrors] = useState({
    passwordError: "border-gray-400",
    usernameError: "border-gray-400",
  });

 

  //  handleRegister function
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      if (!formData.username) {
        setAllErrors((prev) => ({ ...prev, usernameError: "border-red-500" }));
      }

      if (!formData.password) {
        setAllErrors((prev) => ({ ...prev, passwordError: "border-red-500" }));
      }

      console.log("sending data:", formData);

      setLoading(true);

   

      // refresh token
      const acc = refget.data.accessToken
      const ref = refget.data.refreshToken
      console.log(acc);
      console.log(ref);

      
      









      setLoading(false);
      toast.success("Register success", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Flip,
      });

  
    } catch (err) {
      console.log(err);
      toast.error("Login failed", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Flip,
      });
      setLoading(false);
    }
  };
  
  

  return (
    <div className="bg-purple-100 py-10">
      <Container>
        <Flex className="items-center justify-between px-10 py-5 bg-white m-auto rounded-md w-[400px] h-auto shadow-sm border border-gray-300 flex-col">
          <h1 className="text-lg font-mont font-semibold mb-7">
            Login to your account
          </h1>

          {/*  Form starts here */}
          <form
            onSubmit={handleRegister}
            className="flex flex-col items-center w-full gap-4"
          >
            {/* Username */}
            <div className="relative w-full">
              <input
                onChange={(e) => {
                  setFormData((prev) => ({
                    ...prev,
                    username: e.target.value,
                  }));
                  setAllErrors((prev) => ({
                    ...prev,
                    usernameError: "border-gray-400",
                  }));
                }}
                type="text"
                id="name"
                placeholder=" "
                className={`peer ${allErrors.usernameError} cursor-pointer hover:border-black w-full h-[60px] px-4 pt-5 rounded-md border text-gray-900 focus:border-[#5d3754] focus:ring-1 focus:ring-[#5d3754] outline-none`}
              />
              <label
                htmlFor="name"
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-0.5 peer-focus:text-[11px] peer-focus:font-semibold peer-focus:text-[#5d3754] bg-white px-1"
              >
                Full Name
              </label>
            </div>

            {/* Password */}
            <div className="relative w-full">
              <input
                onChange={(e) => {
                  setFormData((prev) => ({
                    ...prev,
                    password: e.target.value,
                  }));
                  setAllErrors((prev) => ({
                    ...prev,
                    passwordError: "border-gray-400",
                  }));
                }}
                type={eye ? "text" : "password"}
                id="password"
                placeholder=" "
                className={`peer ${allErrors.passwordError} cursor-pointer hover:border-black w-full h-[60px] px-4 pt-5 rounded-md border text-gray-900 focus:border-[#5d3754] focus:ring-1 focus:ring-[#5d3754] outline-none`}
              />
              <label
                htmlFor="password"
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-0.5 peer-focus:text-[11px] peer-focus:font-semibold peer-focus:text-[#5d3754] bg-white px-1"
              >
                Password
              </label>
              <button
                type="button"
                onClick={() => setEye(!eye)}
                className="absolute right-2 top-1/3 -translate-y-1/3 text-gray-500 w-8 h-8 rounded-full hover:bg-gray-200 duration-150 flex justify-center items-center"
              >
                {eye ? <IoMdEyeOff /> : <HiEye />}
              </button>
            </div>

            {/* Login Button */}

            {loading ? (
              <div
                className="font-semibold flex items-center justify-center rounded-md w-full py-3 bg-red-500 text-white uppercase text-sm cursor-pointer duration-300 hover:bg-[#5d3754]"
                type="submit"
              >
                <BeatLoader color="white" margin={3} size={10} width={30} />
              </div>
            ) : (
              <button
                className="font-semibold mb-3.5 rounded-md w-full py-3 bg-[#5d3754] text-white uppercase text-sm cursor-pointer duration-300 hover:bg-[#381d32]"
                type="submit"
              >
                Login
              </button>
            )}
          </form>

          <p className="text-sm text-gray-500 mt-3">
            Not Registered?
            <Link href="/register" className="text-[#5d3754] font-semibold cursor-pointer">
              Sign Up
            </Link>
          </p>

          <p className="text-base text-gray-600 mt-3">
            Or continue with social account
          </p>

          <button
            type="button"
            className="font-semibold mt-9 mb-12 flex items-center justify-center gap-4 rounded-md w-full py-3 text-black uppercase text-sm cursor-pointer duration-300 bg-gray-100 hover:bg-gray-200"
          >
            <FcGoogle size={23} />
            LOGIN with Google
          </button>
        </Flex>
      </Container>
    </div>
  );
};

export default Login;
