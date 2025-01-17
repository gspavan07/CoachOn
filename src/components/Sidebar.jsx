import React from "react";

const Sidebar = () => {
  return (
    <aside className="w-1/4 p-4 bg-gray-100">
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
        <h3 className="font-semibold">Price</h3>
        <input type="range" min="0" max="100000" className="w-full" />
      </div>
      <div className="mt-4">
        <h3 className="font-semibold">Rating</h3>
        <div className="flex space-x-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button key={star} className="border px-2 py-1 rounded">
              {star}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
