import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { shape, arrayOf, number, string, func } from 'prop-types';
import Product from './Product';
import { Close, ShoppingCart } from '../assets/svgs';

import './cart.scss';
import CalculateTotals from './CalculatedTotals';
// import RenderModal from './Modal';

const Cart = ({ products, total, onCheckoutClicked }) => {
  console.log('products', products);
  // const [show, setShow] = useState(true);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const hasProducts = products.length > 0;
  const nodes = hasProducts ? (
    products.map(product => (
      <div className="cart_products">
        <Product
          title={product.title}
          price={product.price}
          quantity={product.quantity}
          key={product.id}
          image={product.image}
        />
      </div>
    ))
  ) : (
    <div className="cart_empty">
      <ShoppingCart fill="#9B9B9B" />
      <p>Please add some products to cart.</p>
    </div>
  );

  const headerDisplay = () => {
    const windowWidth = window.innerWidth;
    console.log('windowWidth', windowWidth);
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
      {nodes}
      {products.length ? (
        <Fragment>
          <div className="cart_products">
            <CalculateTotals
              total={total}
              onCheckoutClicked={onCheckoutClicked}
              hasProducts={hasProducts}
            />
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
      id: number.isRequired,
      title: string.isRequired,
      price: number.isRequired,
      quantity: number.isRequired,
      image: string.isRequired
    })
  ),
  total: string,
  onCheckoutClicked: func
};

Cart.defaultProps = {
  products: [],
  total: null,
  onCheckoutClicked: null
};

export default Cart;
