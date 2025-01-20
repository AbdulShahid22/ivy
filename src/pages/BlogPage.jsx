import React, { useState } from "react";

export const BlogPage = () => {
  const [blogPosts] = useState([
    {
      id: 1,
      title: "How to Choose the Right University Abroad",
      excerpt:
        "Discover the key factors to consider when selecting your ideal university for international education...",
      date: "2023-11-15",
      image:
        "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      category: "University Guide",
    },
    {
      id: 2,
      title: "PTE vs IELTS: Which Test Should You Take?",
      excerpt:
        "A comprehensive comparison of PTE and IELTS to help you make the right choice for your academic journey...",
      date: "2023-11-14",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      category: "Test Preparation",
    },
    {
      id: 3,
      title: "Student Visa Application Tips",
      excerpt:
        "Expert tips and guidelines to help you navigate through the student visa application process successfully...",
      date: "2023-11-13",
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      category: "Visa Guide",
    },
  ]);

  return (
    <div className="w-full bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-4">Our Blog</h1>
        <p className="text-gray-600 text-center mb-12">
          Stay updated with the latest insights about studying abroad
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-blue-600 mb-2">
                  {post.category}
                </div>
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    {new Date(post.date).toLocaleDateString()}
                  </span>
                  <button className="text-blue-600 hover:text-blue-700">
                    Read More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
