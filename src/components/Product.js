import React from 'react';
import { number, string, func } from 'prop-types';
import Button from './Button';
import { images } from '../utils/imageArray';

import './product.scss';

const Product = ({ price, inventory, title, quantity, onAddToCart, onRemoveFromCart }) => {
  return (
    <div className="product_container">
      <div className="product_details">
        <div className="product_image">
          {images.map(image => {
            return title === image.title ? (
              <img src={image.src} alt={image.alt} title={image.title} key={image.title} />
            ) : null;
          })}
        </div>
        <div className="product_details-flex">
          <span>{title}</span>
          <span>{`$${price}`}</span>
          <button type="button" className="product_remove-button">
            Remove
          </button>
        </div>
      </div>
      <div className="product_total-quantity">
        <Button
          onClick={onRemoveFromCart}
          theme="secondary-minus"
          disabled={quantity > 0 ? '' : 'disabled'}
        />

        <div className="product_quantity">{quantity}</div>
        <Button
          onClick={onAddToCart}
          theme="secondary-add"
          disabled={quantity > 0 ? '' : 'disabled'}
        />
      </div>
      <p>{inventory ? `${inventory} remaining` : null}</p>
    </div>
  );
};

Product.propTypes = {
  price: number.isRequired,
  inventory: number,
  title: string.isRequired,
  quantity: number.isRequired,
  onAddToCart: func.isRequired,
  onRemoveFromCart: func.isRequired
};

Product.defaultProps = {
  inventory: null
};

export default Product;
