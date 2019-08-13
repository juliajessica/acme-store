import React from 'react';
import { number, string } from 'prop-types';
import Button from './Button';
import { images } from '../utils/imageArray';

import './product.scss';

const Product = ({ price, inventory, title, quantity }) => (
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
        // onCheckoutClicked={() => checkout(products)}
        theme="secondary-minus"
        disabled={quantity > 0 ? '' : 'disabled'}
      />
      <div className="product_quantity">{quantity}</div>
      <Button
        // onCheckoutClicked={() => checkout(products)}
        theme="secondary-add"
        disabled={quantity > 0 ? '' : 'disabled'}
      />
    </div>

    <p>{inventory ? `${inventory} remaining` : null}</p>
  </div>
);

Product.propTypes = {
  price: number.isRequired,
  inventory: number.isRequired,
  title: string.isRequired,
  quantity: number.isRequired
};

export default Product;
