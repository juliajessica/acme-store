import React from 'react';
import { shape, string, number, func } from 'prop-types';
import Button from './Button';

import './productItem.css';

const quartzImage = (
  // eslint-disable-next-line global-require
  <img src={require('../assets/quartz.png')} alt="quartz watch" title="quartz watch" />
);

const ProductItem = ({ product, onAddToCartClicked }) => (
  <div className="product_item-container">
    {/* {images.map(image => <img src={require(image)} 
    // title={imageAlt}
    />)} */}
    <div className="product_item">
      <div>{quartzImage}</div>
      <div className="product_item-details">
        <p className="product_title-price">
          <span>{product.title}</span>
          <span>{`$${product.price}`}</span>
        </p>
        <p>{product.inventory ? `${product.inventory} remaining` : null}</p>
        <Button
          onClick={onAddToCartClicked}
          theme="primary"
          disabled={product.inventory > 0 ? '' : 'disabled'}
        >
          {product.inventory > 0 ? 'Add to cart' : 'Sold Out'}
        </Button>
      </div>
    </div>
  </div>
);

ProductItem.propTypes = {
  product: shape({
    title: string.isRequired,
    price: number.isRequired,
    inventory: number.isRequired
  }).isRequired,
  onAddToCartClicked: func.isRequired
};

export default ProductItem;
