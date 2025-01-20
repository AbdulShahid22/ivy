import React, { useState } from "react";
import { VoucherCard } from "./VoucherCard";
import { PurchaseModal } from "./PurchaseModal";
import { CheckCircle } from "lucide-react";

export const VoucherSection = () => {
  const [selectedVoucher, setSelectedVoucher] = useState(null); // Use null instead of a specific type
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handlePurchaseSuccess = () => {
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 5000);
  };

  const getVoucherPrice = (voucher) => {
    switch (voucher) {
      case "PTE":
        return 330;
      case "Duolingo":
        return 39;
      default:
        return 0;
    }
  };

  return (
    <div className="w-full bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4">Discounted Test Vouchers</h2>
        <p className="text-gray-600 text-center mb-12">
          Get exclusive discounts on PTE and Duolingo test vouchers
        </p>

        {/* Success message for purchase */}
        {showSuccessMessage && (
          <div className="fixed top-4 right-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded flex items-center">
            <CheckCircle className="h-5 w-5 mr-2" />
            Purchase successful! Check your email for the discount code.
          </div>
        )}

        {/* Voucher Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <VoucherCard
            type="PTE"
            originalPrice={385}
            discountedPrice={330}
            onPurchase={() => setSelectedVoucher("PTE")} // Select PTE voucher
          />
          <VoucherCard
            type="Duolingo"
            originalPrice={49}
            discountedPrice={39}
            onPurchase={() => setSelectedVoucher("Duolingo")} // Select Duolingo voucher
          />
        </div>
      </div>

      {/* Purchase Modal */}
      <PurchaseModal
        isOpen={selectedVoucher !== null} // Open if voucher is selected
        onClose={() => setSelectedVoucher(null)} // Close the modal by resetting the selectedVoucher
        voucherType={selectedVoucher || "PTE"} // Default to "PTE" if null
        price={selectedVoucher ? getVoucherPrice(selectedVoucher) : 0} // Set price based on selected voucher
        onSuccess={handlePurchaseSuccess} // Trigger success callback after purchase
      />
    </div>
  );
};
