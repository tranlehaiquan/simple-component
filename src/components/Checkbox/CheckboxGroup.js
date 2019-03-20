import React, {
  Component
} from 'react';
import propTypes from 'prop-types';

class CheckboxGroup extends Component {
  handleOnClick = (value, event) => {
    const { min, max, values } = this.props;
    const isChecked = event.target.checked;

    if(!isChecked && values.length <= min) return;
    if(isChecked && values.length >= max) return;

    this.props.onChange(value, event);
  }

  renderChildrent = () => {
    const {
      children,
      values,
      name,
      disabled
    } = this.props;

    const radios = React.Children.map(children, (radio) => {
      const checked = values.includes(radio.props.value);
      const radioDisabled = radio.props.disabled;

      return React.cloneElement(
        radio, {
          checked,
          onChange: this.handleOnClick,
          name,
          disabled: disabled || radioDisabled
        }
      );
    });

    return radios;
  }

  render() {
    return ( 
      <div className = "sp-radio__group" > 
        {
          this.renderChildrent()
        } 
      </div>
    );
  }
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

export default CheckboxGroup;
