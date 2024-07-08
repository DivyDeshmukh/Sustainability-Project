// StatsCard.jsx
import React from "react";
import {
  ClipboardDocumentCheckIcon,
  ClipboardDocumentListIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";

const StatsCard = ({ type, count, total }) => {
  let icon;
  let textClass;

  switch (type) {
    case "total":
      icon = (
        <ClipboardDocumentListIcon className="h-12 w-12 text-blue-500 mb-4" />
      );
      textClass = "text-black";
      break;
    case "completed":
      icon = (
        <ClipboardDocumentCheckIcon className="h-12 w-12 text-green-500 mb-4" />
      );
      textClass = "text-green-600";
      break;
    case "remaining":
      icon = <ExclamationCircleIcon className="h-12 w-12 text-red-500 mb-4" />;
      textClass = "text-red-600";
      break;
    default:
      icon = null;
      textClass = "";
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
      {icon}
      <p className="text-lg font-semibold">
        {type.charAt(0).toUpperCase() + type.slice(1)}
      </p>
      <p className={`text-2xl font-bold ${textClass}`}>
        {count} {total ? `/${total}` : ""}
      </p>
    </div>
  );
};

export default StatsCard;
