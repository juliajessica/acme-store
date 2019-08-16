import React, { useState, Fragment, useEffect } from 'react';
import { number, string, arrayOf, shape, func } from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { checkout } from '../actions';
import { getCartProducts, getTotal } from '../reducers';

import Button from '../components/Button';
import FullScreenModal from '../components/Modal';
import Cart from '../components/Cart';

import './navbar.scss';

const NavBar = ({ products, total, addToCart, removeFromCart }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let finalQuantity = 0;

  const reducer = (acc, currentVal) => acc + currentVal;

  const pluckQuantity = array => {
    const quantityArray = [];
    array.map(item => {
      return quantityArray.push(item.quantity);
    });
    const copy = [...quantityArray];
    finalQuantity = copy.reduce(reducer, 0);

    return finalQuantity;
  };

  const cartButton = () => {
    pluckQuantity(products);

    const windowWidth = window.innerWidth;
    let cartDisplay = null;

    const buttonComp = () => {
      return (
        <Button
          onClick={() => {
            handleShow();
            checkout(products);
          }}
          theme="textLink"
          disabled={products.length > 0 ? '' : 'disabled'}
        >
          <span className="navbar_cart">
            {finalQuantity > 0 ? `${finalQuantity} items in your cart` : `Your cart is empty`}
          </span>
        </Button>
      );
    };

    if (windowWidth >= 1025) {
      cartDisplay = buttonComp();
    } else {
      cartDisplay = <Link to="/cart">{buttonComp()}</Link>;
    }
    return cartDisplay;
  };

  useEffect(() => {
    cartButton();
  });

  return (
    <Fragment>
      <div className="navbar_container">
        <Link to="/">
          <h1>Acme Store</h1>
        </Link>
        <div className="navbar_column2">{cartButton()}</div>
      </div>
      <FullScreenModal show={show} handleClose={handleClose} onHide={handleClose} title="Your Cart">
        <Cart
          handleClose={handleClose}
          products={products}
          total={total}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      </FullScreenModal>
    </Fragment>
  );
};

NavBar.propTypes = {
  products: arrayOf(
    shape({
      id: number,
      title: string,
      inventory: number,
      quantity: number
    })
  ).isRequired,
  total: string.isRequired,
  addToCart: func,
  removeFromCart: func
};

NavBar.defaultProps = {
  addToCart: () => {},
  removeFromCart: () => {}
};

const mapStateToProps = state => ({
  products: getCartProducts(state),
  total: getTotal(state)
});

export default connect(
  mapStateToProps,
  { checkout }
)(NavBar);
