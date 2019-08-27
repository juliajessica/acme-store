import React from 'react';
import { shallow } from 'enzyme';
import ProductsList from './ProductsList';

const setup = props => {
  const component = shallow(<ProductsList>{props.children}</ProductsList>);
  // console.log('component.children().at(1)', component.children().at(1));
  return {
    component,
    children: component.children('.products_product-wrapper')
  };
};

describe('ProductsList component', () => {
  it('should render children', () => {
    const { children } = setup({ children: 'Test Children' });
    // console.log('children', children.dive());
    expect(children.text()).toMatch(/^Test Children$/);
  });
});
