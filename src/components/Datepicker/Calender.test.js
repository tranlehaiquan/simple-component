import React from 'react';
import Calender from './Calender';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

test('Render component calender', () => {
  console.log((new Date('1996-03-14')).toUTCString());
  const component = renderer.create(
		<Calender onChange={() => {}} value={new Date('1996-03-14')} />
	);

	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Render component calender type month', () => {
	const component = renderer.create(
    <Calender onChange={() => {}} value={new Date('1996-03-14')} type="month"/>
	);

	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('Render component calender type year', () => {
	const component = renderer.create(
    <Calender onChange={() => {}} value={new Date('1996-03-14')} type="year"/>
	);

	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

describe('Calender behavior test', () => {
  test('Calender test onchange', () => {
    const onChange = sinon.spy();
    const component = mount(
      <Calender onChange={onChange} value={new Date('1996-03-14')}/>
    );
  
    const dateBtn = component.find('.sp-calender__date').first();

    dateBtn.simulate('click');
    expect(onChange).toHaveProperty('callCount', 1);
  });
});
