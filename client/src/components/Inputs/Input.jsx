import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ 
  placeholder = '', 
  value = '', 
  onChange, 
  bgColor = 'bg-white', 
  fontColor = 'text-black', 
  type = 'text', 
  className = '' 
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`p-2 w-full ${fontColor} ${bgColor} rounded-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
    />
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  bgColor: PropTypes.string,
  fontColor: PropTypes.string,
  type: PropTypes.oneOf(['text', 'password', 'email', 'number', 'search', 'tel', 'url']),
  className: PropTypes.string,
};

export default Input;
