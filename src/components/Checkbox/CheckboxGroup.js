import React, { memo } from 'react';
import propTypes from 'prop-types';

function CheckboxGroup(props) {
  function handleOnClick(value, event) {
    const { min, max, values } = props;
    const isChecked = event.target.checked;

    if(!isChecked && values.length <= min) return;
    if(isChecked && values.length >= max) return;

    props.onChange(value, event);
  }

  function renderChildrent() {
    const {
      children,
      values,
      name,
      disabled
    } = props;

    const radios = React.Children.map(children, (radio) => {
      const checked = values.includes(radio.props.value);
      const radioDisabled = radio.props.disabled;

      return React.cloneElement(
        radio, {
          checked,
          onChange: handleOnClick,
          name,
          disabled: disabled || radioDisabled
        }
      );
    });

    return radios;
  }

  return ( 
    <div className = "sp-radio__group" > 
      {
        renderChildrent()
      } 
    </div>
  );
}

CheckboxGroup.propTypes = {
  children: propTypes.node,
  values: propTypes.array,
  name: propTypes.string,
  onChange: propTypes.func,
  disabled: propTypes.bool,
  min: propTypes.number,
  max: propTypes.number
};

CheckboxGroup.defaultProps = {
  values: [],
  name: '',
  disabled: false
};

export default memo(CheckboxGroup);
