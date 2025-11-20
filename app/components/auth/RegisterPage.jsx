'use client'
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { HiEye } from "react-icons/hi";
import { IoMdEyeOff } from "react-icons/io";
import Container from "../../components/Container";
import Flex from "../../components/Flex";
import Link from "next/link";
import axios from "axios";
import { Flip, toast } from "react-toastify";
import { useRouter } from "next/navigation";
// import { Flip, toast } from "react-toastify";

const RegisterPage = () => {
  const [eye, setEye] = useState(false);
  const [reeye, setReEye] = useState(false);
  const router = useRouter();


  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "ADMIN",
    username: "",
    confirmPass: "",
  });

  const [allErrors, setAllErrors] = useState({
    emailError: "border-gray-400",
    passwordError: "border-gray-400",
    confirmpassError: "border-gray-400",
    usernameError: "border-gray-400",
  });

  //  handleRegister function
const handleRegister = async (e) => {
  e.preventDefault();

  // VALIDATIONS
  if (!formData.username || !formData.email || !formData.password || !formData.confirmPass) {
    toast.error("All fields are required");
    return;
  }

  if (formData.password !== formData.confirmPass) {
    toast.error("Passwords do not match");
    return;
  }

  console.log("sending data:", formData);

  try {
  const res = await axios.post(
    "https://api.freeapi.app/api/v1/users/register",
    {
      username: formData.username,
      email: formData.email,
      password: formData.password,
    },
    {
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );

  toast.success("Register success!");
  console.log(res.data);

  // redirect to login page
  router.push("/login");

} catch (err) {
  console.log(err.response?.data);
  toast.error(err.response?.data?.message || "Register Failed");
}

};






      
    
    


  return (
    <div className="bg-purple-100 py-10">
      <Container>
        <Flex className="items-center justify-between px-10 py-5 bg-white m-auto rounded-md w-[400px] h-auto shadow-sm border border-gray-300 flex-col">
          <h1 className="text-lg font-mont font-semibold mb-2">
            Register with a new account
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

            {/* Email */}
            <div className="relative w-full">
              <input
                onChange={(e) => {
                  setFormData((prev) => ({ ...prev, email: e.target.value }));
                  setAllErrors((prev) => ({
                    ...prev,
                    emailError: "border-gray-400",
                  }));
                }}
                type="email"
                id="email"
                placeholder=" "
                className={`peer ${allErrors.emailError} cursor-pointer hover:border-black w-full h-[60px] px-4 pt-5 rounded-md border text-gray-900 focus:border-[#5d3754] focus:ring-1 focus:ring-[#5d3754] outline-none`}
              />
              <label
                htmlFor="email"
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-0.5 peer-focus:text-[11px] peer-focus:font-semibold peer-focus:text-[#5d3754] bg-white px-1"
              >
                Email Id
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

            {/* Confirm Password */}
            <div className="relative w-full">
              <input
                onChange={(e) => {
                  setFormData((prev) => ({
                    ...prev,
                    confirmPass: e.target.value,
                  }));
                  setAllErrors((prev) => ({
                    ...prev,
                    confirmpassError: "border-gray-400",
                  }));
                }}
                type={reeye ? "text" : "password"}
                id="confirmpassword"
                placeholder=" "
                className={`peer ${allErrors.confirmpassError} cursor-pointer hover:border-black w-full h-[60px] px-4 pt-5 rounded-md border text-gray-900 focus:border-[#5d3754] focus:ring-1 focus:ring-[#5d3754] outline-none`}
              />
              <label
                htmlFor="confirmpassword"
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-0.5 peer-focus:text-[11px] peer-focus:font-semibold peer-focus:text-[#5d3754] bg-white px-1"
              >
                Confirm Password
              </label>
              <button
                type="button"
                onClick={() => setReEye(!reeye)}
                className="absolute right-2 top-1/3 -translate-y-1/3 text-gray-500 w-8 h-8 rounded-full hover:bg-gray-200 duration-150 flex justify-center items-center"
              >
                {reeye ? <IoMdEyeOff /> : <HiEye />}
              </button>
            </div>

            {/* Register Button */}
            <button
              className="font-semibold rounded-md w-full py-3 bg-[#5d3754] text-white uppercase text-sm cursor-pointer duration-300 hover:bg-[#382032]"
              type="submit"
            >
              Register
            </button>
          </form>

          <p className="text-sm text-gray-800 mt-3">
            Already have an account?
            <Link href={'/login'} className="text-[#5d3754] font-semibold cursor-pointer">
              Login
            </Link>
          </p>

          <p className="text-sm text-gray-950 mt-3">
            Or continue with social account
          </p>

          <button
            type="button"
            className="font-semibold flex items-center justify-center gap-4 rounded-md w-full py-3 text-black uppercase text-sm cursor-pointer duration-300 bg-gray-100 hover:bg-gray-200"
          >
            <FcGoogle size={23} />
            Sign up with Google
          </button>
        </Flex>
      </Container>
    </div>
  );
};

export default RegisterPage;