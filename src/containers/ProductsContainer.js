import React from 'react';
import { func, number, string, arrayOf, shape } from 'prop-types';
import { connect } from 'react-redux';
import { addToCart } from '../actions';
import { getVisibleProducts } from '../reducers/products';
import NavBar from './NavBar';
import ProductItem from '../components/ProductItem';
import ProductsList from '../components/ProductsList';

import './productsContainer.css';

// eslint-disable-next-line no-shadow
const ProductsContainer = ({ products, addToCart }) => (
  <div className="products-container">
    <div className="products-nav">
      <NavBar />
    </div>
    <ProductsList>
      <div className="product-wrapper">
        {products.map(product => (
          <ProductItem
            key={product.id}
            product={product}
            onAddToCartClicked={() => addToCart(product.id)}
          />
        ))}
      </div>
    </ProductsList>
  </div>
);

ProductsContainer.propTypes = {
  products: arrayOf(
    shape({
      id: number.isRequired,
      title: string.isRequired,
      price: number.isRequired,
      inventory: number.isRequired
    })
  ).isRequired,
  addToCart: func.isRequired
};

const mapStateToProps = state => ({
  products: getVisibleProducts(state.products)
});

export default connect(
  mapStateToProps,
  { addToCart }
)(ProductsContainer);
