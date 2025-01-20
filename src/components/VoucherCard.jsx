import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
export const VoucherCard = ({ type, originalPrice, discountedPrice, onPurchase }) => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const savings = originalPrice - discountedPrice;
  const handlePurchaseClick = () => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    onPurchase();
  };
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <div className="flex items-center justify-center h-16 w-16 bg-blue-100 rounded-full mx-auto mb-4">
        <img
          src={
            type === "PTE"
              ? "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Pearson_PTE_Academic_logo.svg/1200px-Pearson_PTE_Academic_logo.svg.png"
              : "https://d23cwzsbkjbm45.cloudfront.net/static/images/duolingo/duolingo-logo.svg"
          }
          alt={`${type} logo`}
          className="h-10 w-10 object-contain"
        />
      </div>
      <h3 className="text-xl font-semibold text-center mb-4">
        {type} Test Voucher
      </h3>
      <div className="text-center mb-4">
        <span className="text-gray-500 line-through text-lg">
          ${originalPrice}
        </span>
        <span className="text-2xl font-bold text-blue-600 ml-2">
          ${discountedPrice}
        </span>
      </div>
      <div className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm text-center mb-4">
        Save ${savings}
      </div>
      <button
        onClick={handlePurchaseClick}
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
      >
        {isAuthenticated ? "Purchase Voucher" : "Login to Purchase"}
      </button>
    </div>
  );
};