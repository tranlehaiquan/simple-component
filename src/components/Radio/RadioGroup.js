import React, {
  Component
} from 'react';
import propTypes from 'prop-types';

class RadioGroup extends Component {
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
      const checked = value == radio.props.value;

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

RadioGroup.propTypes = {
  children: propTypes.node,
  value: propTypes.oneOfType([
    propTypes.number,
    propTypes.string,
    propTypes.bool
  ]),
  name: propTypes.string,
  onChange: propTypes.func,
};

RadioGroup.defaultProps = {
  name: ''
};

export default RadioGroup;
