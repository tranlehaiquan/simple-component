import React, {
  Component
} from 'react';
import propTypes from 'prop-types';

class CheckboxGroup extends Component {
  handleOnClick = (value) => {
    this.props.onChange(value);
  }

  renderChildrent = () => {
    const {
      children,
      value,
      name
    } = this.props;

    const radios = React.Children.map(children, (radio) => {
      const checked = value.includes(radio.props.value);

      return React.cloneElement(
        radio, {
          checked,
          onChange: this.handleOnClick,
          name
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
};

CheckboxGroup.defaultProps = {
  name: '',
  value: []
};

export default CheckboxGroup;
