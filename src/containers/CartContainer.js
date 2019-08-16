import React from 'react';
import { arrayOf, shape, number, string, func } from 'prop-types';
import { connect } from 'react-redux';
import { checkout, addToCart, removeFromCart } from '../actions';
import { getTotal, getCartProducts } from '../reducers';
import Cart from '../components/Cart';

const CartContainer = ({ products, total, checkout, addToCart, removeFromCart }) => {
  return (
    <Cart
      products={products}
      total={total}
      onCheckoutClicked={() => checkout(products)}
      addToCart={addToCart}
      removeFromCart={removeFromCart}
    />
  );
};

CartContainer.propTypes = {
  products: arrayOf(
    shape({
      id: number,
      title: string,
      price: number,
      quantity: number,
      image: string
    })
  ).isRequired,
  total: string.isRequired,
  checkout: func.isRequired,
  addToCart: func, // will update to isRequired
  removeFromCart: func.isRequired
};

CartContainer.defaultProps = {
  addToCart: () => {}
};

const mapStateToProps = state => ({
  products: getCartProducts(state),
  total: getTotal(state)
});

export default connect(
  mapStateToProps,
  { checkout, addToCart, removeFromCart }
)(CartContainer);
