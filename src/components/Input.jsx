// src/components/Input.jsx
import React from "react";

const Input = React.forwardRef(function (
  { type = "text", placeholder = "", label = "", className = "", ...props },
  ref
) {
  return (
    <div className="flex flex-col w-full">
      {label && (
        <label className="mb-1 text-white font-mediu, text-sm">
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        className={`p-2 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out ${className}`}
        ref={ref}
        {...props}
      />
    </div>
  );
});

export default Input;
