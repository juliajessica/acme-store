import React from 'react';
import { string } from 'prop-types';

export const Add = ({ stroke }) => (
  <svg width="16px" height="15px" viewBox="0 0 16 15" version="1.1">
    <g id="v2" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="square">
      <g
        id="Mobile-Copy-4"
        transform="translate(-247.000000, -233.000000)"
        stroke={stroke}
        strokeWidth="2"
      >
        <g id="Amount-Picker" transform="translate(17.000000, 220.000000)">
          <g id="Add-btn" transform="translate(191.000000, 0.000000)">
            <g id="Add" transform="translate(40.000000, 14.000000)">
              <path d="M0.333333333,6.5 L13.6833229,6.5" id="Line-2" />
              <path d="M7,0 L7,13" id="Line-2" />
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
);

Add.propTypes = {
  stroke: string
};

Add.defaultProps = {
  stroke: '#D8D8D8'
};
