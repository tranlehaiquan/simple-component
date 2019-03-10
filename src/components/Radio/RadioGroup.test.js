import React from 'react';
import renderer from 'react-test-renderer';
import Radio from './Radio';
import RadioGroup from './RadioGroup';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

test('Render RadioGroup', () => {
  const component = renderer.create(
    <RadioGroup 
      name="opitons"
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

test('Render RadioGroup, disabled', () => {
  const component = renderer.create(
    <RadioGroup 
      name="opitons"
      value={1}
      onChange={() => {}}
      disabled
    >
      <Radio value="1">Option 1</Radio>
      <Radio value="2">Option 2</Radio>
      <Radio value="3">Option 3</Radio>
    </RadioGroup>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Render RadioGroup required', () => {
  const component = renderer.create(
    <RadioGroup 
      name="opitons"
      value={1}
      onChange={() => {}}
      required
    >
      <Radio value="1">Option 1</Radio>
      <Radio value="2">Option 2</Radio>
      <Radio value="3">Option 3</Radio>
    </RadioGroup>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Render RadioGroup required', () => {
  const component = renderer.create(
    <RadioGroup 
      name="opitons"
      value={1}
      onChange={() => {}}
      required
      disabled
    >
      <Radio value="1">Option 1</Radio>
      <Radio value="2">Option 2</Radio>
      <Radio value="3">Option 3</Radio>
    </RadioGroup>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

describe('Test behavior of RadioGroup', () => {
	test('Radio group with event onchange', () => {
		const onRadioChange = sinon.spy();
		const component = mount(
			<RadioGroup 
				name="option"
				value={1}
				onChange={onRadioChange}
			>
				<Radio value="1">Option 1</Radio>
				<Radio value="2">Option 2</Radio>
				<Radio value="3">Option 3</Radio>
			</RadioGroup>
		);

		component.find('Radio').first().find('input').simulate('change');

		expect(onRadioChange).toHaveProperty('callCount', 1);
		expect(onRadioChange.args[0][0]).toBe('1');

		component.setProps({ value: 2 });
		expect(component.find('Radio').at(1).prop('checked')).toBeTruthy();
	});
});
