import React from "react";
import { BookOpen, Globe, FileCheck, Users } from "lucide-react";
export const Features = () => {
  return (
    <div className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 text-center">
            <Globe className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">University Selection</h3>
            <p className="text-gray-600">
              Expert guidance in choosing the right university and program
            </p>
          </div>
          <div className="p-6 text-center">
            <FileCheck className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Visa Assistance</h3>
            <p className="text-gray-600">
              Complete support for student visa application process
            </p>
          </div>
          <div className="p-6 text-center">
            <BookOpen className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Test Preparation</h3>
            <p className="text-gray-600">
              Comprehensive coaching for IELTS, TOEFL, and more
            </p>
          </div>
          <div className="p-6 text-center">
            <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Career Counseling</h3>
            <p className="text-gray-600">
              Professional guidance for career planning
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
