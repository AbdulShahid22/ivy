import React from "react";
export const Hero = () => {
  return (
    <div className="w-full bg-gradient-to-r from-blue-50 to-indigo-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Your Journey to Global Education Starts Here
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Expert guidance for your international education dreams. Get
              personalized support for admissions, visa, and more.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg hover:bg-blue-700">
              Start Your Journey
            </button>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3"
              alt="Students studying abroad"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
