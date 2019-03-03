import React, {Fragment} from 'react';
import renderer from 'react-test-renderer';
import Checkbox from './Checkbox';
import CheckboxGroup from './CheckboxGroup';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

describe('snapshot for checkbox', () => {
  test('Checkbox', () => {
    const component = renderer.create(<Checkbox value="Hi" onChange={() => {}}/>);

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Checkbox', () => {
    const component = renderer.create(
      <CheckboxGroup value={['banana']} onChange={() => {}}>
        <Checkbox value="organe"/>
        <Checkbox value="banana"/>
        <Checkbox value="coconut"/>
        <Checkbox value="carot" disabled/>
      </CheckboxGroup>
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
