"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";
import Card from "@/components/Card";
import { IoLocationOutline } from "react-icons/io5";
import { FaSortAmountDown } from "react-icons/fa";
import { useState } from "react";
export default function Search() {
  const [SortToggle, setSortToggle] = useState(false);
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedSorting, setSelectedSorting] = useState("Popular");
  const coachingData = Array(20).fill({
    name: "A Coaching",
    location: "Bhanugudi, Kakinada",
    rating: 4.3,
    reviews: "56 Ratings",
    course: "UPSC",
    mode: "Offline",
    price: "₹29,999",
  });
  return (
    <>
      <Navbar />
      <div className="main-container min-h-screen">
        <header className="flex justify-between items-center md:mx-20 p-4">
          <div className="flex items-center">
            <IoLocationOutline className="w-7 h-7 mr-2" />
            <input
              type="text"
              placeholder="Kakinada"
              className="border border-gray-300 rounded-md md:w-[80%] w-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <FaSortAmountDown
            className="mx:hidden flex space-x-4 mr-5"
            onClick={() => setSortToggle(!SortToggle)}
          />
          {SortToggle && (
            <div className="absolute right-16 top-20 sm:right-20 px-4 py-4 border-gray-700 border-[1px] bg-white gap-4 rounded-lg flex flex-col">
              {[
                "Popular",
                "User Rating",
                "Price(High to Low)",
                "Price(Low to High)",
              ].map((opt, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedSorting(opt)}
                  className={`px-2 py-1 rounded ${
                    selectedSorting === opt
                      ? "bg-primary text-white"
                      : "bg-transparent"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          )}

          <div className="mx:flex hidden space-x-4">
            {[
              "Popular",
              "User Rating",
              "Price(High to Low)",
              "Price(Low to High)",
            ].map((opt, index) => (
              <button
                key={index}
                onClick={() => setSelectedSorting(opt)}
                className={`px-2 py-1 rounded ${
                  selectedSorting === opt
                    ? "bg-primary text-white"
                    : "bg-transparent"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </header>

        <div className="flex">
          <aside className="sidebar w-1/4 md:w-3/5 p-4">
            <h2 className="font-bold text-lg">Filters</h2>
            <div className="mt-4">
              <h3 className="font-semibold">Exam/Course</h3>
              <div className="flex flex-col space-y-2">
                <label>
                  <input type="checkbox" /> UPSC
                </label>
                <label>
                  <input type="checkbox" /> GATE
                </label>
                <label>
                  <input type="checkbox" /> JEE
                </label>
                <label>
                  <input type="checkbox" /> NEET
                </label>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="font-semibold">Mode of Teaching</h3>
              <div className="flex flex-col space-y-2">
                <label>
                  <input type="checkbox" /> Offline
                </label>
                <label>
                  <input type="checkbox" /> Online
                </label>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="font-semibold">Max Fee</h3>
              <input
                type="number"
                placeholder="100000"
                className="border border-gray-300 rounded-md md:w-[80%] w-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="mt-4">
              <h3 className="font-semibold">Rating</h3>
              <div className="flex flex-wrap gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => setSelectedRating(star)}
                    className={`border px-2 py-1 rounded ${
                      selectedRating === star
                        ? "bg-primary text-white"
                        : "bg-transparent"
                    }`}
                  >
                    {star}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          <main className="overflow-y-auto main-content border-t-2 border-l-2 border-gray-200 py-10 px-10">
            <div className="flex flex-wrap gap-4">
              {coachingData.map((item, index) => (
                <Card
                  key={index}
                  name={item.name}
                  location={item.location}
                  rating={item.rating}
                  reviews={item.reviews}
                  course={item.course}
                  mode={item.mode}
                  price={item.price}
                />
              ))}
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}
