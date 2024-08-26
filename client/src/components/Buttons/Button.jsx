import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, bgColor, fontColor, onClick, type = 'button' }) => {
  return (
    <button
      type={type}
      className={`p-2 w-20 font-bold font-bold text-sm ${fontColor} rounded-sm ${bgColor}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

Button.defaultProps = {
  className: '',
  onClick: () => {},
  type: 'button',
};

export default Button;
