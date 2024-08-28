import React from 'react';
import PropTypes from 'prop-types';

const Select = ({ 
  options = [], 
  value = '', 
  onChange, 
  bgColor = 'bg-white', 
  fontColor = 'text-black', 
  className = '' 
}) => {
  return (
    <select
      value={value}
      onChange={onChange}
      className={`p-2 w-full ${fontColor} ${bgColor} rounded-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
    >
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

Select.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  bgColor: PropTypes.string,
  fontColor: PropTypes.string,
  className: PropTypes.string,
};

export default Select;
