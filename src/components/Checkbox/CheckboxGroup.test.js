import React from 'react';
import renderer from 'react-test-renderer';
import Checkbox from './Checkbox';
import CheckboxGroup from './CheckboxGroup';
import { shallow } from 'enzyme';
import sinon from 'sinon';

test('Checkbox', () => {
  const component = renderer.create(
    <CheckboxGroup value={['banana']} onChange={() => {}} name="vegetable">
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
    <CheckboxGroup value={['banana']} onChange={() => {}} name="vegetable" disabled>
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
  const component = shallow(
    <CheckboxGroup value={['banana']} onChange={onChange} name="vegetable">
      <Checkbox value="organe"/>
      <Checkbox value="banana"/>
      <Checkbox value="coconut"/>
    </CheckboxGroup>
  );

  const checkbox = component.find('Checkbox').first();
  checkbox.simulate('change');

  expect(onChange).toHaveProperty('callCount', 1);
});
