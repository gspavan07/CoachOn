import React from "react";

const Card = ({ name, location, rating, reviews, course, mode, price }) => {
  return (
    <div className="bg-gray-800 w-full md:w-[48%] lg:w-[32%] xl:w-[23%] flex flex-col justify-items-end rounded-lg p-4 shadow-lg hover:shadow-2xl">
      <img
        src="1.jpg"
        alt="Coaching"
        className="w-full h-32 object-cover rounded-md"
      />
      <div className="grid grid-cols-2">
        <div>
          <p className="font-bold text-white text-lg mt-2">{name}</p>
          <p className="text-sm text-gray-400">{location}</p>
          <p className="text-primary text-sm mt-1">{course}</p>
          <p className="text-yellow-400 font-bold mt-1">{price}</p>
        </div>
        <div className="flex flex-col items-end">
          <p className="text-sm text-green-400 mt-3">Very Good ({rating})</p>
          <p className="text-sm text-gray-500">{reviews}</p>
          <p className="text-md text-white mt-1">{mode}</p>
        </div>
      </div>

      <button className="bg-primary text-white px-4 py-2  mt-2 rounded hover:bg-primary">
        Know More
      </button>
    </div>
  );
};

export default Card;
