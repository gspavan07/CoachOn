import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";
const SignUp = () => {
  return (
    <>
      <Navbar />
      <div className="flex min-h-full flex-1 flex-col my-20 justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img alt="CoachOn" src="logo.svg" className="mx-auto h-10 w-auto" />
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form method="POST" className="space-y-6">
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
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-500 sm:text-sm/6"
                />
              </div>
            </div>
            {/* phone input  */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Mobile Number
              </label>
              <div className="mt-2">
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-500 sm:text-sm/6"
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
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-500 sm:text-sm/6"
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

              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-500 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
              >
                Sign Up
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Already a member?{" "}
            <a
              href="/login"
              className="font-semibold text-blue-500 hover:text-blue-500"
            >
              Login
            </a>
          </p>
        </div>
      </div>
      <Footer className="absolute bottom-0" />
    </>
  );
};

export default SignUp;
