import React from 'react';
import renderer from 'react-test-renderer';
import Checkbox from './Checkbox';
import CheckboxGroup from './CheckboxGroup';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

test('Checkbox', () => {
  const component = renderer.create(
    <CheckboxGroup values={['banana']} onChange={() => {}} name="vegetable">
      <Checkbox value="organe"/>
      <Checkbox value="banana"/>
      <Checkbox value="coconut"/>
      <Checkbox value="carot" disabled/>
    </CheckboxGroup>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Checkbox disabled', () => {
  const component = renderer.create(
    <CheckboxGroup values={['banana']} onChange={() => {}} name="vegetable" disabled>
      <Checkbox value="organe"/>
      <Checkbox value="banana"/>
      <Checkbox value="coconut"/>
      <Checkbox value="carot"/>
    </CheckboxGroup>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('CheckboxGroup spy', () => {
  const onChange = sinon.spy();
  const component = mount(
    <CheckboxGroup 
      values={['banana']} 
      onChange={onChange} 
      name="vegetable"
      min={1}
      max={2}
    >
      <Checkbox value="banana"/>
      <Checkbox value="organe"/>
      <Checkbox value="coconut"/>
      <Checkbox value="carot"/>
      <Checkbox value="tomato"/>
    </CheckboxGroup>
  );
  
  // try to uncheck
  component.find('Checkbox').first().find('input').simulate('change', {target: { checked: false }});
  expect(onChange).toHaveProperty('callCount', 0);

  // try to check another
  component.find('Checkbox').at(1).find('input').simulate('change', {target: { checked: true }});
  component.setProps({values: ['banana', 'organe']});
  expect(onChange).toHaveProperty('callCount', 1);

  // check if it max
  component.find('Checkbox').at(2).find('input').simulate('change', {target: { checked: true }});
  expect(onChange).toHaveProperty('callCount', 1);
});
