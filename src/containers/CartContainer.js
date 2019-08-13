import React from 'react';
import { arrayOf, shape, number, string, func } from 'prop-types';
import { connect } from 'react-redux';
import { checkout } from '../actions';
import { getTotal, getCartProducts } from '../reducers';
import Cart from '../components/Cart';

const CartContainer = ({ products, total, checkout }) => {
  return <Cart products={products} total={total} onCheckoutClicked={() => checkout(products)} />;
};

CartContainer.propTypes = {
  products: arrayOf(
    shape({
      id: number.isRequired,
      title: string.isRequired,
      price: number.isRequired,
      quantity: number.isRequired,
      image: string.isRequired
    })
  ).isRequired,
  total: string.isRequired,
  checkout: func.isRequired
};

const mapStateToProps = state => ({
  products: getCartProducts(state),
  total: getTotal(state)
});

export default connect(
  mapStateToProps,
  { checkout }
)(CartContainer);
