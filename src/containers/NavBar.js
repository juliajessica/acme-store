import React, { useState, Fragment } from 'react';
import { number, string, arrayOf, shape, func } from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { checkout } from '../actions';
import { getCartProducts, getQuantity, getTotal } from '../reducers';

import Button from '../components/Button';
import FullScreenModal from '../components/Modal';
import Cart from '../components/Cart';

import './navbar.scss';

const totalQuantity = null;

const cartText = products => {
  console.log('cartText products', products);

  const emptyCart = 'Your cart is empty';
  const cartWithItems = `${totalQuantity} items in your cart`;

  return totalQuantity > 0 ? cartWithItems : emptyCart;
};

const NavBar = ({ products, total }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const [total, getTotal] = useState(0);

  const cartButton = () => {
    const windowWidth = window.innerWidth;
    let cartDisplay = null;

    if (windowWidth >= 1025) {
      cartDisplay = (
        <Button
          onClick={() => {
            handleShow();
            checkout(products);
          }}
          theme="textLink"
          disabled={products.length > 0 ? '' : 'disabled'}
        >
          <span className="navbar_cart">{cartText(products)}</span>
        </Button>
      );
    } else {
      cartDisplay = (
        <Link to="/cart">
          <Button
            onClick={() => {
              checkout(products);
            }}
            theme="textLink"
            disabled={products.length > 0 ? '' : 'disabled'}
          >
            <span className="navbar_cart">{cartText(products)}</span>
          </Button>
        </Link>
      );
    }
    return cartDisplay;
  };

  return (
    <Fragment>
      <div className="navbar_container">
        <Link to="/">
          <h1>Acme Store</h1>
        </Link>
        <div className="navbar_column2">{cartButton()}</div>
      </div>
      <FullScreenModal show={show} handleClose={handleClose} onHide={handleClose} title="Your Cart">
        <Cart handleClose={handleClose} products={products} total={total} />
      </FullScreenModal>
    </Fragment>
  );
};

NavBar.propTypes = {
  products: arrayOf(
    shape({
      id: number.isRequired,
      title: string.isRequired,
      inventory: number.isRequired
    })
  ).isRequired,
  checkout: func.isRequired,
  total: string.isRequired
  // quantity: obj.isRequired
  // viewCart: func.isRequired
};

const mapStateToProps = state => ({
  products: getCartProducts(state),
  quantity: getQuantity(state),
  total: getTotal(state)
});

export default connect(
  mapStateToProps,
  { checkout }
)(NavBar);
