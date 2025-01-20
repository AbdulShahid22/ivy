import React from "react";
const destinations = [
  {
    country: "USA",
    image:
      "https://images.unsplash.com/photo-1550850839-7c7a7d8584d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description:
      "Home to world-renowned universities like Harvard, MIT, and Stanford.",
    highlights: [
      "Diverse culture",
      "Top-ranked universities",
      "Optional Practical Training (OPT)",
      "Research opportunities",
    ],
  },
  {
    country: "UK",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description:
      "Traditional excellence with universities like Oxford and Cambridge.",
    highlights: [
      "Rich academic heritage",
      "Short study duration",
      "Post-study work visa",
      "Cultural diversity",
    ],
  },
  {
    country: "Canada",
    image:
      "https://images.unsplash.com/photo-1517935706615-2717063c2225?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description:
      "Known for quality education and excellent post-study opportunities.",
    highlights: [
      "Post-graduation work permit",
      "Path to PR",
      "Safe environment",
      "Affordable education",
    ],
  },
  {
    country: "Australia",
    image:
      "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "High-quality education with a great lifestyle and weather.",
    highlights: [
      "Work while studying",
      "Post-study work rights",
      "High living standards",
      "Beautiful environment",
    ],
  },
  {
    country: "Germany",
    image:
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description:
      "Excellence in engineering and technology with low/no tuition fees.",
    highlights: [
      "No tuition fees",
      "Strong economy",
      "Rich culture",
      "Innovation hub",
    ],
  },
  {
    country: "Ireland",
    image:
      "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "Emerging education hub with excellent job opportunities.",
    highlights: [
      "English-speaking",
      "2-year stay back",
      "Welcoming culture",
      "Growing job market",
    ],
  },
];
export const DestinationsPage = () => {
  return (
    <div className="w-full bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-4">
          Study Destinations
        </h1>
        <p className="text-gray-600 text-center mb-12">
          Explore top study destinations and find your perfect fit
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <div
              key={destination.country}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <img
                src={destination.image}
                alt={`Study in ${destination.country}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">
                  {destination.country}
                </h2>
                <p className="text-gray-600 mb-4">{destination.description}</p>
                <div className="space-y-2">
                  {destination.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                      <span className="text-sm text-gray-600">{highlight}</span>
                    </div>
                  ))}
                </div>
                <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
