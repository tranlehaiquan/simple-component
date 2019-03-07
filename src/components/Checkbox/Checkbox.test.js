import React from 'react';
import renderer from 'react-test-renderer';
import Checkbox from './Checkbox';
import { shallow } from 'enzyme';
import sinon from 'sinon';

describe('snapshot for checkbox', () => {
  test('Checkbox', () => {
    const component = renderer.create(
      <div>
        <Checkbox value="organe" name="vegetable" checked={true} onChange={() => {}}/>
        <Checkbox value="banana" name="vegetable" checked={false} disabled onChange={() => {}}/>
        <Checkbox value="coconut" name="vegetable" checked={false} required onChange={() => {}}/>
        <Checkbox value="coconut" name="vegetable" checked={false} onChange={() => {}} className="sp-last"/>
      </div>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Checkbox behavior', () => {
  test('Checkbox without group, spy', () => {
    const onChange = sinon.spy();
    const component = shallow(
      <div>
        <Checkbox value="organe" checked={true} onChange={onChange}/>
        <Checkbox value="banana" checked={false} onChange={onChange}/>
        <Checkbox value="coconut" checked={false} onChange={onChange}/>
      </div>
    );

    const checkbox = component.find('Checkbox').first();
    checkbox.simulate('change');

    expect(onChange).toHaveProperty('callCount', 1);
  });
});
