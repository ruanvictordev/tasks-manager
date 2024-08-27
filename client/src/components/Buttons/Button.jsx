import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, bgColor = 'bg-blue-500', fontColor = 'text-white', onClick = () => {}, type = 'button', className = '' }) => {
  return (
    <button
      type={type}
      className={`p-2 font-bold text-sm ${fontColor} rounded-sm ${bgColor} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  bgColor: PropTypes.string,
  fontColor: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  className: PropTypes.string,
};

export default Button;
