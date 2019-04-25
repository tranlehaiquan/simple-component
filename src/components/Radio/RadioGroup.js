import React, {
  memo
} from 'react';
import propTypes from 'prop-types';

function RadioGroup(props) {
  function handleOnClick(value, e) {
    props.onChange(value, e);
  }

  function renderChildrent() {
    const {
      children,
      value,
      name
    } = props;

    const radios = React.Children.map(children, (radio) => {
      const checked = value == radio.props.value;

      return React.cloneElement(
        radio, {
          checked,
          onChange: handleOnClick,
          name
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

RadioGroup.propTypes = {
  children: propTypes.node,
  value: propTypes.oneOfType([
    propTypes.number,
    propTypes.string,
    propTypes.bool
  ]),
  name: propTypes.string,
  onChange: propTypes.func,
  required: propTypes.bool,
  disabled: propTypes.bool
};

RadioGroup.defaultProps = {
  name: '',
  value: '',
  required: false,
  disabled: false
};

export default memo(RadioGroup);
