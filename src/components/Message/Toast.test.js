import React from 'react';
import renderer from 'react-test-renderer';
import Toast from './Toast';
import { shallow, mount } from 'enzyme';

test('render snapshot Toast', () => {
  const component = renderer.create(
    <Toast 
      message="Hello the world???" 
      show={true} 
      type="success"
      close={() => {}}
      duration={1500}
    />
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
