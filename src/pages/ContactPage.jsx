import React from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { ContactForm } from "../components/ContactForm";
export const ContactPage = () => {
  return (
    <div className="w-full bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-4">Contact Us</h1>
        <p className="text-gray-600 text-center mb-12">
          Get in touch with us for any queries about our services
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-blue-600 mr-3" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-600">contact@ivyadmissions.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-blue-600 mr-3" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-gray-600">+1 (773) 699-6921</p>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-blue-600 mr-3" />
                <div>
                  <p className="font-semibold">Address</p>
                  <p className="text-gray-600">
                    123 Education Street, Chicago, IL 60659
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <Clock className="h-6 w-6 text-blue-600 mr-3" />
                <div>
                  <p className="font-semibold">Business Hours</p>
                  <p className="text-gray-600">
                    Monday - Friday: 9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};
