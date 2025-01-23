"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";
import Link from "next/link";
import { LuEye, LuEyeOff } from "react-icons/lu";
const SignUp = () => {
  const router = useRouter();
  const [errorText, setErrorText] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
  });
  const handelChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSignup = async (e) => {
    e.preventDefault();
    setErrorText("");
    const { name, email, mobile, password } = formData;
    try {
      const response = await fetch("/api/signup", {
        method: "POST", // Specify the POST method
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, mobile, password }),
      });
      const result = await response.json();
      console.log(result);
      if (response.status == 200) {
        router.push("/signup");
      }
      if (response.status != 200) {
        setErrorText(result.error);
      }
    } catch (error) {
      setErrorText("An error occurred while signing up. Please try again.");
    }
  };
  return (
    <>
      <Navbar />
      <div className="flex min-h-full flex-1 flex-col my-20 justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img alt="CoachOn" src="logo.svg" className="mx-auto h-10 w-auto" />
        </div>
        {/* Error Message */}
        {errorText && (
          <p className="text-red-500 text-center font-bold text-sm italic mt-10">
            {errorText}
          </p>
        )}
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSignup} className="space-y-6">
            {/* Fullname input */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Full Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  onChange={handelChange}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6"
                />
              </div>
            </div>
            {/* phone input  */}
            <div>
              <label
                htmlFor="mobile"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Mobile Number
              </label>
              <div className="mt-2">
                <input
                  id="mobile"
                  name="mobile"
                  type="tel"
                  required
                  onChange={handelChange}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6"
                />
              </div>
            </div>
            {/* Email input */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  onChange={handelChange}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6"
                />
              </div>
            </div>
            {/* password input  */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Password
              </label>

              <div className="mt-2 justify-end items-center flex">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  onChange={handelChange}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6"
                />
                {showPassword ? (
                  <LuEye
                    className="absolute m-3 cursor-pointer"
                    onClick={() => {
                      setShowPassword(false);
                    }}
                  />
                ) : (
                  <LuEyeOff
                    className="absolute m-3 cursor-pointer"
                    onClick={() => {
                      setShowPassword(true);
                    }}
                  />
                )}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Sign Up
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Already a member?{" "}
            <Link
              href="/login"
              className="font-semibold text-primary hover:text-primary"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
      <Footer className="absolute bottom-0" />
    </>
  );
};

export default SignUp;
