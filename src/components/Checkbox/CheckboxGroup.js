import React, {
  Component
} from 'react';
import propTypes from 'prop-types';

class CheckboxGroup extends Component {
  handleOnClick = (value, event) => {
    this.props.onChange(value, event);
  }

  renderChildrent = () => {
    const {
      children,
      value,
      name,
      disabled
    } = this.props;

    const radios = React.Children.map(children, (radio) => {
      const checked = value.includes(radio.props.value);
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
  value: propTypes.array,
  name: propTypes.string,
  onChange: propTypes.func,
  disabled: propTypes.bool
};

CheckboxGroup.defaultProps = {
  value: [],
  name: '',
  disabled: false
};

export default CheckboxGroup;
