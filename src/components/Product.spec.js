import React from 'react';
import { shallow } from 'enzyme';
import Product from './Product';

const getDefaultProps = () => ({
  title: 'Test Product',
  price: 9.99,
  quantity: 3,
  inventory: 1,
  onAddToCart: jest.fn(),
  onRemoveFromCart: jest.fn()
});

describe('Product component', () => {
  it('should return component', () => {
    const props = getDefaultProps();
    const wrapper = shallow(<Product {...props} />);

    expect(wrapper.debug()).toMatchSnapshot();
  });
  it('should render all props', () => {
    const props = getDefaultProps();
    const wrapper = shallow(<Product {...props} />);
    console.log('quantity', wrapper.setProps());
    // console.log('check', wrapper.find('')
    // console.log('component.props()', component.props().children[1].props);
    // expect(component.props('title')).toEqual('Test Product');
    expect(wrapper.find('.product_quantity')).to.have.lengthOf(1);
  });
  // describe('when given inventory', () => {
  //   it('should render title, price, and inventory', () => {
  //     const { component } = setup({ title: 'Test Product', price: 9.99, inventory: 6 });
  //     expect(component.text()).toBe('Test Product - $9.99 x 6');
  //   });
  // });
});
