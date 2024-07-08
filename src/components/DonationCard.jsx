// DonationCard.jsx
import React from "react";
import { CurrencyDollarIcon } from "@heroicons/react/24/outline";

const DonationCard = ({ donation }) => {
  return (
    <div
      key={donation.id}
      className="bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300"
    >
      <img
        src={donation.image}
        alt={`Donation of ${donation.amount}`}
        className="w-full h-40 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <div className="flex items-center">
          <CurrencyDollarIcon className="h-6 w-6 text-yellow-500" />
          <p className="ml-2 text-lg font-semibold">${donation.amount}</p>
        </div>
        <p className="mt-2 text-gray-600">Date: {donation.date}</p>
      </div>
    </div>
  );
};

export default DonationCard;
