import React from 'react';
import renderer from 'react-test-renderer';
import Radio from './Radio';
import RadioGroup from './RadioGroup';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

describe('make snapshot', () => {
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

  test('Radio group with event onchange', () => {
    const onRadioChange = sinon.spy();
    const component = mount(
      <RadioGroup 
        name="hello"
        value={1}
        onChange={onRadioChange}
      >
        <Radio value="1">Option 1</Radio>
        <Radio value="2" disabled>Option 2</Radio>
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




