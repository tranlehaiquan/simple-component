import React from 'react';
import renderer from 'react-test-renderer';
import Radio from './Radio';
import RadioGroup from './RadioGroup';
import { shallow } from 'enzyme';
import sinon from 'sinon';

test('Render Radios with, radio group', () => {
  const component = renderer.create(
    <RadioGroup 
      name="hello"
      value={1} 
      onChange={() => {}} 
    >
      <Radio value="1">Option 1</Radio>
      <Radio value="2" disabled>Option 2</Radio>
      <Radio value="3">Option 3</Radio>
    </RadioGroup>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Render single Radio', () => {
  const component = renderer.create(
    <Radio value="1">Option 1</Radio>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Normal radio', () => {
  const onRadioClick = sinon.spy();
  const component = shallow(<Radio value="1" onClick={onRadioClick} >Value 1</Radio>);
  const input = component.find('input');

  expect(component.find('.sp-radio__icon')).toBeDefined();
  expect(component.text()).toBe('Value 1');
  expect(input.prop('disabled')).toBeFalsy();

  input.simulate('click');
  expect(onRadioClick).toHaveProperty('callCount', 1);
});

test('Radio disabled', () => {
  const onRadioClick = sinon.spy();
  const component = shallow(<Radio value="1" disabled>Value 1</Radio>);
  const input = component.find('input');
  const icon = component.find('.sp-radio__icon');

  expect(input.prop('disabled')).toBeTruthy();
  expect(input.prop('value')).toBe('1');
  expect(icon.prop('tabIndex')).toBe('-1');
  
  input.simulate('click');
  expect(onRadioClick).toHaveProperty('callCount', 0);
});
