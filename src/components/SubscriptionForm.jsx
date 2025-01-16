import React from "react";
import Button from "./Button";

const SubscriptionForm = () => {
  return (
    <div className="flex flex-col items-center p-6 bg-gray-100">
      <h2 className="text-2xl font-semibold mb-2">
        Subscribe To Our News Letter
      </h2>
      <p className="mb-6">
        Get institute Notifications, Exam Notifications and News Updates
      </p>
      <form className="flex flex-col lg:flex-row items-center">
        <div className="flex flex-col md:flex-row">
          <input
            type="email"
            placeholder="Enter your email id"
            className="mb-4 lg:mb-0 md:mr-4 px-4 py-2 rounded border border-gray-300"
          />
          <input
            type="tel"
            placeholder="Enter your mobile no"
            className="mb-4 lg:mb-0 lg:mr-4 px-4 py-2 rounded border border-gray-300"
          />
        </div>
        <select className="mb-4 lg:mb-0 lg:mr-4 px-4 py-2 rounded border border-gray-300">
          <option>Choose your course</option>
          {/* Add more options here */}
        </select>
        <Button text="Submit" className="w-96 lg:w-40" />
      </form>
    </div>
  );
};

export default SubscriptionForm;
