import React from 'react';
import { node } from 'prop-types';
import FadeIn from 'react-fade-in';

import './productsList.scss';

const ProductsList = ({ children }) => (
  <div className="products-list-container">
    <FadeIn>{children}</FadeIn>
  </div>
);

ProductsList.propTypes = {
  children: node.isRequired
};
export default ProductsList;
