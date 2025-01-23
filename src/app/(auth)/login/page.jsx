"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import { LuEye, LuEyeOff } from "react-icons/lu";
import Navbar from "@/components/NavBar";
const Login = () => {
  const router = useRouter(); // Initialize the router

  const [user, setUser] = useState(null);

  useEffect(() => {
    const userDetails = localStorage.getItem("token");
    if (userDetails) {
      setUser(userDetails);
    }
    console.log(user);
  }, []);

  // Error Message state
  const [errorText, setErrorText] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle login form submission
  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorText(""); // Reset error text
    const { email, password } = formData;
    try {
      const response = await fetch("/api/login", {
        method: "POST", // Specify the POST method
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }), // Convert data to JSON string
      });
      const result = await response.json();
      localStorage.setItem("token", result.user.token);
      console.log(result);
      if (response.status === 200) {
        router.push("/signup"); // Navigate to signup on successful login
      } else {
        setErrorText(result.error); // Display error message
      }
    } catch (error) {
      setErrorText("An error occurred while signing in. Please try again."); // Display a generic error message
      console.log(error.message);
    }
  };

  return (
    <div>
      {user ? (
        <div>Welcome, {user}!</div>
      ) : (
        <>
          <Navbar />
          <div className="flex min-h-full flex-1 flex-col my-20 justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <img
                alt="CoachOn"
                src="logo.svg"
                className="mx-auto h-10 w-auto"
              />
            </div>
            {/* Display Error Message */}
            {errorText && (
              <p className="text-red-500 text-center font-bold text-sm italic mt-10">
                {errorText}
              </p>
            )}
            <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
              <form onSubmit={handleLogin} className="space-y-6">
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
                      onChange={handleChange}
                      autoComplete="email"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>

                {/* Password input */}
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      Password
                    </label>
                    <div className="text-sm">
                      <Link
                        href="#"
                        className="font-semibold text-primary hover:text-primary"
                      >
                        Forgot password?
                      </Link>
                    </div>
                  </div>

                  <div className="mt-2 justify-end items-center flex">
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      required
                      onChange={handleChange}
                      autoComplete="current-password"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                    {showPassword ? (
                      <LuEye
                        className="absolute m-3 cursor-pointer"
                        onClick={() => setShowPassword(false)}
                      />
                    ) : (
                      <LuEyeOff
                        className="absolute m-3 cursor-pointer"
                        onClick={() => setShowPassword(true)}
                      />
                    )}
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Login
                  </button>
                </div>
              </form>

              <p className="mt-10 text-center text-sm/6 text-gray-500">
                Not a member?{" "}
                <Link
                  href="/signup"
                  className="font-semibold text-primary hover:text-primary"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
          <Footer className="absolute bottom-0" />
        </>
      )}
    </div>
  );
};

export default Login;
