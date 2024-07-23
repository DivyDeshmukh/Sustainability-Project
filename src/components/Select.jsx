

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Select = ({ id, placeholder, icon, options, ...props }) => {
    return (
      <div className="relative">
        <select
          id={id}
          {...props}
          className="form-select block w-full mt-1 pl-10"
        >
          <option value="">{placeholder}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {icon && (
          <div className="absolute top-2 left-2">
            <FontAwesomeIcon icon={icon} className="text-gray-500" />
          </div>
        )}
      </div>
    );
  };
  
  export default Select;
  