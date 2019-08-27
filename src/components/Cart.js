import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { shape, arrayOf, number, string, func } from 'prop-types';
// import { checkout } from '../actions';

// import { getCartProducts } from '../reducers';
import Product from './Product';
import { Close, ShoppingCart } from '../assets/svgs';

import './cart.scss';
import CalculateTotals from './CalculatedTotals';

const Cart = ({ products, total, onCheckoutClicked, addToCart, removeFromCart }) => {
  console.log('CART: products', typeof products);

  const hasProducts = products.length > 0;
  const nodes = hasProducts ? (
    products.map(product => (
      <Product
        title={product.title}
        price={product.price}
        quantity={product.quantity}
        key={product.id}
        onAddToCart={() => addToCart(product.id)}
        onRemoveFromCart={() => removeFromCart(product.id)}
      />
    ))
  ) : (
    <div className="cart_empty">
      <ShoppingCart fill="#9B9B9B" />
      <p>Please add some products to cart.</p>
    </div>
  );

  // const arrayOfIds = products.map(product => product.id);
  // console.log('seeIfIWork', arrayOfIds.forEach(id => () => addToCart(id)));

  const headerDisplay = () => {
    const windowWidth = window.innerWidth;
    const closeIcon = (
      <div className="cart_header">
        <Link to="/">
          <Close />
        </Link>
        <h3>Your Cart</h3>
      </div>
    );
    return windowWidth <= 1025 ? closeIcon : null;
  };

  return (
    <div className="cart_container">
      {headerDisplay()}
      <div className="cart_products">{nodes}</div>
      {products.length ? (
        <Fragment>
          <div className="cart_products">
            <CalculateTotals total={total} />
          </div>
          <button
            className="calculated-totals_checkout-button"
            onClick={onCheckoutClicked}
            type="button"
            disabled={hasProducts ? '' : 'disabled'}
          >
            Checkout
          </button>
        </Fragment>
      ) : null}
    </div>
  );
};

Cart.propTypes = {
  products: arrayOf(
    shape({
      id: number,
      title: string,
      price: number,
      quantity: number
    })
  ).isRequired,
  total: string,
  onCheckoutClicked: func,
  addToCart: func.isRequired,
  removeFromCart: func.isRequired
};

Cart.defaultProps = {
  total: null,
  onCheckoutClicked: null
};

export default Cart;
