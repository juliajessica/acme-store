import React, { useState, useEffect } from 'react';
import { func, number, string, arrayOf, shape } from 'prop-types';
import { connect } from 'react-redux';
import { addToCart, checkout } from '../actions';
import { getVisibleProducts } from '../reducers/products';
import NavBar from './NavBar';
import ProductItem from '../components/ProductItem';
import ProductsList from '../components/ProductsList';
import RenderSpinner from '../components/Spinner';

import './productsContainer.scss';

// eslint-disable-next-line no-shadow
const ProductsContainer = ({ products, addToCart }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 800);
  }, []);

  if (loading) {
    return <RenderSpinner />;
  }
  if (!loading) {
    return (
      <div className="products_container">
        <div className="products_nav">
          <NavBar products={products} />
        </div>
        <ProductsList>
          <div className="products_product-wrapper">
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
  }
  return <RenderSpinner />;
};

ProductsContainer.propTypes = {
  products: arrayOf(
    shape({
      id: number,
      title: string,
      price: number,
      inventory: number
    })
  ).isRequired,
  addToCart: func.isRequired
};

const mapStateToProps = state => ({
  products: getVisibleProducts(state.products)
});

export default connect(
  mapStateToProps,
  { addToCart, checkout }
)(ProductsContainer);
