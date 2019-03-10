import React, { Component } from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';

class Radio extends Component {
  handleOnChange = (e) => {
    const { onChange, value } = this.props;

    onChange(value, e);
  }

  handleKeyPress = e => {
    const keyCodeOfSpace = 32;

    if (e.keyCode !== keyCodeOfSpace) return;

    const { onChange, value } = this.props;
    onChange(value);
  }

  render() {
    const { children, checked, value, name, disabled, required } = this.props;
    const classnameRadio = classnames('sp-radio__item', {
      ['sp-radio__item--checked']: checked,
      ['sp-radio__item--disabled']: disabled,
    });

    return (
      <label className={classnameRadio}>
        <input
          type="radio"
          className="sp-radio__input"
          name={name}
          value={value}
          tabIndex="-1"
          checked={checked}
          onChange={this.handleOnChange}
          disabled={disabled}
          required={required}
        />
        <span
          className="sp-radio__icon"
          tabIndex={disabled ? '-1' : '0'}
          onKeyDown={this.handleKeyPress}
        />
        <span className="sp-radio__text">{children}</span>
      </label>
    );
  }
}

Radio.propTypes = {
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
  required: propTypes.bool
};

Radio.defaultProps = {
  checked: false,
  disabled: false,
  required: false
};

export default Radio;
