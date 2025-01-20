import React from "react";
import {
  Briefcase,
  GraduationCap,
  FileText,
  Globe,
  Users,
  BookOpen,
} from "lucide-react";
export const ServicesPage = () => {
  const services = [
    {
      icon: GraduationCap,
      title: "University Admissions",
      description:
        "Expert guidance through the entire university application process, including essay reviews and application strategy.",
    },
    {
      icon: FileText,
      title: "Test Vouchers",
      description:
        "Discounted PTE and Duolingo test vouchers with comprehensive preparation support.",
    },
    {
      icon: Globe,
      title: "Study Abroad Consulting",
      description:
        "Personalized counseling to help you choose the right country and university for your academic goals.",
    },
    {
      icon: Briefcase,
      title: "Career Planning",
      description:
        "Strategic career guidance and planning to align your education with your professional aspirations.",
    },
    {
      icon: Users,
      title: "Visa Assistance",
      description:
        "Complete support for student visa applications, including documentation and interview preparation.",
    },
    {
      icon: BookOpen,
      title: "Test Preparation",
      description:
        "Comprehensive coaching for IELTS, TOEFL, PTE, and other required examinations.",
    },
  ];
  return (
    <div className="w-full bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-4">Our Services</h1>
        <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          We offer comprehensive education consulting services to help you
          achieve your academic dreams and build a successful career abroad.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <service.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
