import React from 'react';
import classnames from 'classnames';
import propTypes from 'prop-types';

class Checkbox extends React.Component {
  handleOnChange = () => {
    const { onChange, value } = this.props;

    onChange(value);
  };

  handleKeyPress = e => {
    const keyCodeOfSpace = 32;

    if (e.keyCode !== keyCodeOfSpace) return;

    const { onChange, value } = this.props;
    onChange(value);
  };

  render() {
    const { children, checked, value, name, disabled, className } = this.props;
    const classnameCheckbox = classnames('sp-checkbox__item', {
      ['sp-checkbox__item--checked']: checked,
      ['sp-checkbox__item--disabled']: disabled,
    }, className);

    return (
      <label className={classnameCheckbox}>
        <input
          type="checkbox"
          className="sp-checkbox__input"
          name={name}
          value={value}
          tabIndex="-1"
          checked={checked}
          onChange={this.handleOnChange}
          disabled={disabled}
        />
        <span
          className="sp-checkbox__icon"
          tabIndex={disabled ? '-1' : '0'}
          onKeyDown={this.handleKeyPress}
        />
        <span className="sp-checkbox__text">{children || value}</span>
      </label>
    );
  }
}

Checkbox.propTypes = {
  children: propTypes.node,
  checked: propTypes.bool,
  onChange: propTypes.func,
  value: propTypes.oneOfType([
    propTypes.number,
    propTypes.string,
    propTypes.bool,
  ]),
  name: propTypes.string,
  disabled: propTypes.bool,
  className: propTypes.string
};

Checkbox.defaultProps = {
  checked: false,
  disabled: false,
};

export default Checkbox;
