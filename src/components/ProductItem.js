import React from 'react';
import { shape, string, number, func } from 'prop-types';
import Button from './Button';
import { images } from '../utils/imageArray';

import './productItem.scss';

const ProductItem = ({ product, onAddToCartClicked }) => {
  return (
    <div className="product_item-container">
      <div className="product_item">
        <div>
          {images.map(image => {
            return product.title === image.title ? (
              <img src={image.src} alt={image.alt} title={image.title} key={image.title} />
            ) : null;
          })}
        </div>
        <div className="product_item-details">
          <p className="product_item-title-price">
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
};

ProductItem.propTypes = {
  product: shape({
    title: string,
    price: number,
    inventory: number
  }).isRequired,
  onAddToCartClicked: func.isRequired
};

export default ProductItem;
