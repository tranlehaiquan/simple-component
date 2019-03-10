import React from 'react';
import renderer from 'react-test-renderer';
import Radio from './Radio';
import { shallow } from 'enzyme';
import sinon from 'sinon';

test('Render Radio component', () => {
  const component = renderer.create(
    <Radio value="1" onChange={() => {}} name="options">Option 1</Radio>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Render Radio component Disabled', () => {
  const component = renderer.create(
    <Radio value="1" onChange={() => {}} disabled name="options">Option 1</Radio>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Render Radio component Required', () => {
  const component = renderer.create(
    <Radio value="1" onChange={() => {}} required name="options">Option 1</Radio>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Render Radio component Required, disabled', () => {
  const component = renderer.create(
    <Radio value="1" onChange={() => {}} required disabled name="options">Option 1</Radio>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

describe('Test Radio with props', () => {
	test('Normal radio', () => {
		const onRadioClick = sinon.spy();
		const component = shallow(<Radio value="1" onChange={onRadioClick} >Value 1</Radio>);
		const input = component.find('input');
  
		expect(component.find('.sp-radio__icon')).toBeDefined();
		expect(component.text()).toBe('Value 1');
		expect(input.prop('disabled')).toBeFalsy();
  
		input.simulate('change');
		expect(onRadioClick).toHaveProperty('callCount', 1);
		expect(onRadioClick.args[0][0]).toBe('1');
	});

	test('Radio disabled', () => {
		const onRadioClick = sinon.spy();
		const component = shallow(<Radio value="1" disabled onChange={onRadioClick}>Value 1</Radio>);
		const input = component.find('input');
		const icon = component.find('.sp-radio__icon');
  
		expect(input.prop('disabled')).toBeTruthy();
		expect(input.prop('value')).toBe('1');
		expect(icon.prop('tabIndex')).toBe('-1');
    
		input.simulate('click');
		expect(onRadioClick).toHaveProperty('callCount', 0);
	});
});




