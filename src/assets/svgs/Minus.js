import React from 'react';
import { string } from 'prop-types';

export const Minus = ({ stroke }) => (
  <svg width="16px" height="2px" viewBox="0 0 16 2" version="1.1">
    <g id="v2" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="square">
      <g
        id="Mobile-Copy-4"
        transform="translate(-57.000000, -239.000000)"
        stroke={stroke}
        strokeWidth="2"
      >
        <g id="Amount-Picker" transform="translate(17.000000, 220.000000)">
          <g id="Subtract-btn">
            <path d="M41,20 L55,20" id="Remove" />
          </g>
        </g>
      </g>
    </g>
  </svg>
);

Minus.propTypes = {
  stroke: string
};

Minus.defaultProps = {
  stroke: '#D8D8D8'
};
