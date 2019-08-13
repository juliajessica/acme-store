import React from 'react';
import { string, node, oneOfType } from 'prop-types';
import { ShoppingCart, Minus, Add } from '../assets/svgs';

import './button.scss';

const Button = ({ children, customClass, theme, type, ...rest }) => {
  const renderSvg = () => {
    let svg = null;
    if (theme === 'textLink') {
      svg = <ShoppingCart />;
    }
    if (theme === 'secondary-minus') {
      svg = <Minus />;
    }
    if (theme === 'secondary-add') {
      svg = <Add />;
    }
    return svg;
  };

  return (
    /* eslint-disable react/button-has-type */
    <button type={type} className={`button_container button_${theme} ${customClass}`} {...rest}>
      {renderSvg()}
      {children}
    </button>
  );
};

Button.propTypes = {
  children: oneOfType([string, node]),
  customClass: string,
  theme: string,
  type: string
};

Button.defaultProps = {
  children: null,
  customClass: null,
  theme: 'primary',
  type: 'button'
};

export default Button;
