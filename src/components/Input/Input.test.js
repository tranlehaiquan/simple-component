import React from 'react';
import Input from './Input';
import renderer from 'react-test-renderer';

test('Render Input', () => {
	const component = renderer.create(
		<Input 
      placeholder="hello the world" 
      size="md"
      onChange={() => {}}
      onBlur={() => {}}
      onFocus={() => {}}
    />
	);

	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
