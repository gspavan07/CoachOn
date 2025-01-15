"use client";
import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [MenuToggle, setMenuToggle] = useState(false);
  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="px-4 md:mx-8 lg:mx-14 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="logo.svg"
            alt="CoachOn Logo"
            className="md:h-8 h-5 invert"
          />
        </div>
        {/*Small Screen Navbar Items */}
        <div className="lg:hidden block">
          {MenuToggle ? (
            <div className="scale-up-hor-right fixed top-0 right-0 h-full bg-white shadow-lg">
              <div className="flex items-center justify-between px-4 md:py-3 py-2 border-b">
                <span className="text-lg font-bold">Menu</span>
                <IoMdClose
                  className="size-[1.5rem]"
                  onClick={() => setMenuToggle(false)}
                />
              </div>
              {/* Navbar Items */}
              <ul className="p-4 space-y-4">
                {/* Search Bar */}
                <li>
                  <input
                    type="text"
                    placeholder="Search"
                    className="border border-gray-300 rounded-md w-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </li>
                {/* Premium */}
                <li>
                  <a
                    href="#list-property"
                    className="text-gray-600 hover:text-black  text-sm flex flex-col items-center"
                  >
                    <span className="font-medium">Premium</span>
                    <span className="text-xs text-gray-400">
                      Contact us to list
                    </span>
                  </a>
                </li>
                {/* List Your institute */}
                <li>
                  <a
                    href="#list-property"
                    className="text-gray-600 hover:text-black text-sm  flex flex-col items-center"
                  >
                    <span className="font-medium">List your institute</span>
                    <span className="text-xs text-gray-400">
                      Contact us to list
                    </span>
                  </a>
                </li>

                {/* Login / Signup */}
                <li>
                  <a
                    href="#login"
                    className="text-white text-sm bg-red-500 px-6 py-3 rounded-lg flex flex-col items-center"
                  >
                    <span className="font-medium">Login/Signup</span>
                  </a>
                </li>
              </ul>
            </div>
          ) : (
            <CiMenuBurger
              className="size-[1.35rem]"
              onClick={() => setMenuToggle(true)}
            />
          )}
        </div>
        {/* Navbar Items */}
        <ul className="space-x-8 lg:flex hidden items-center">
          {/* Search Bar */}
          <li className="flex items-center">
            <input
              type="text"
              placeholder="Search"
              className="border border-gray-300 xl:w-96 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </li>

          {/* Premium */}
          <li>
            <a
              href="#list-property"
              className="text-gray-600 hover:text-black  text-sm flex flex-col items-center"
            >
              <span className="font-medium">Premium</span>
              <span className="text-xs text-gray-400">Contact us to list</span>
            </a>
          </li>

          {/* List Your institute */}
          <li>
            <a
              href="#list-property"
              className="text-gray-600 hover:text-black text-sm  flex flex-col items-center"
            >
              <span className="font-medium">List your institute</span>
              <span className="text-xs text-gray-400">Contact us to list</span>
            </a>
          </li>

          {/* Login / Signup */}
          <li>
            <a
              href="#login"
              className="text-white text-sm flex bg-red-500 px-6 py-3 rounded-lg items-center"
            >
              <span className="font-medium">Login/Signup</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
