"use client";
import Button from "@/components/Button";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import SubscriptionForm from "@/components/SubscriptionForm";
import { useState } from "react";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const slides = [
    { src: "1.jpg", alt: "Slide 1" },
    { src: "2.jpg", alt: "Slide 2" },
    { src: "3.jpg", alt: "Slide 3" },
  ];
  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };
  return (
    <div>
      <NavBar className="z-10" />
      <main className="flex md:flex-row flex-col items-center h-[57vh] md:mx-24 justify-center">
        {/* Search Option */}
        <div className="md:w-1/2 w-[80%] z-10 justify-center items-center">
          <h1 className="text-3xl font-semibold  mb-4">
            Discover and Find the
            <br />
            <span className="line-through text-gray-400 font-normal">
              Best
            </span>{" "}
            Right Coach
          </h1>
          <div className="flex md:w-[90%] justify-center">
            <input
              type="text"
              placeholder="Search"
              className="border border-gray-300 rounded-md md:w-[80%] w-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <Button text="Search" className="md:w-[20%] hidden md:flex" />
          </div>
        </div>
        <div className="md:w-1/2 md:flex hidden">
          <div className="flex items-center justify-center relative">
            <img
              src={slides[currentSlide].src}
              alt={slides[currentSlide].alt}
              className="w-full h-[60%] rounded-xl object-cover"
            />
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-300 p-2 rounded"
            >
              ◀
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-300 p-2 rounded"
            >
              ▶
            </button>
          </div>
        </div>
      </main>
      <SubscriptionForm />
      <Footer />
    </div>
  );
}
