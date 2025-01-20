import React from "react";
export const AboutPage = () => {
  return (
    <div className="w-full bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-4">
          About IVYAdmissions
        </h1>
        <div className="max-w-3xl mx-auto">
          <img
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt="Team of education consultants"
            className="w-full h-64 object-cover rounded-lg shadow-md mb-8"
          />
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              At IVYAdmissions, we're dedicated to helping students achieve
              their dreams of studying abroad. With years of experience in
              international education consulting, we provide comprehensive
              guidance and support to make your educational journey successful.
            </p>
            <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>
            <ul className="list-disc list-inside text-gray-600 mb-6">
              <li>Expert counselors with international education experience</li>
              <li>Personalized guidance for each student</li>
              <li>Comprehensive support from application to visa</li>
              <li>High success rate in university admissions</li>
              <li>Exclusive test preparation resources</li>
              <li>Ongoing support throughout your academic journey</li>
            </ul>
            <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
            <p className="text-gray-600">
              We believe in transparency, integrity, and dedication to student
              success. Our team works tirelessly to ensure that each student
              receives the best possible guidance and support in their
              educational journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
