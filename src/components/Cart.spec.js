import React from 'react';
import { shallow } from 'enzyme';
import Cart from './Cart';
import Product from './Product';
import CalculateTotals from './CalculatedTotals';

const productsArray = [
  {
    id: 1,
    title: 'Product 1',
    price: 9.99,
    quantity: 1
  },
  {
    id: 2,
    title: 'Product 2',
    price: 12.29,
    quantity: 3
  }
];

console.log('productsArray', typeof productsArray);
const setup = (total, products = productsArray) => {
  const actions = {
    onCheckoutClicked: jest.fn(),
    addToCart: jest.fn(),
    removeFromCart: jest.fn()
  };

  const component = shallow(<Cart products={products} total={total} {...actions} />);

  console.log('typeof', component.find(Product));
  return {
    component,
    actions,
    button: component.find('button'),
    products: component.find(Product),
    calculateTotals: component.find(CalculateTotals),
    emptyCartState: component.find('.cart_empty')
    // p: component.find('p')
  };
};

describe('Cart component', () => {
  it('should display total', () => {
    const finalTotal = '2';
    const { calculateTotals } = setup(finalTotal);

    expect(calculateTotals.at(0).props()).toEqual({ total: '2' });
  });

  it('should display add some products message', () => {
    // need to set the products array to [] and check that the emptyCartState displays
    const { emptyCartState, products = emptyArray } = setup();
    expect(products).toBe([]);
    expect(emptyCartState.find('p').text()).toMatch(/^Please add some products to cart/);
  });

  // it('should disable button', () => {
  //   const { button } = setup();
  //   expect(button.prop('disabled')).toEqual('disabled');
  // });

  // describe('when given product', () => {
  //   const product = [
  //     {
  //       id: 1,
  //       title: 'Product 1',
  //       price: 9.99,
  //       quantity: 1
  //     }
  //   ];

  //   it('should render products', () => {
  //     const { products } = setup('9.99', product);
  //     const props = {
  //       title: product[0].title,
  //       price: product[0].price,
  //       quantity: product[0].quantity
  //     };

  //     expect(products.at(0).props()).toEqual(props);
  //   });

  //   it('should not disable button', () => {
  //     const { button } = setup('9.99', product);
  //     expect(button.prop('disabled')).toEqual('');
  //   });

  //   it('should call onCheckoutClicked action on button click', () => {
  //     const { button, actions } = setup('9.99', product);
  //     button.simulate('click');
  //     expect(actions.onCheckoutClicked).toBeCalled();
  //   });
  // });
});
