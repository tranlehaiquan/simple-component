import React, { Component } from 'react'
import propTypes from 'prop-types';

export default class Button extends Component {
  render() {
    const { 
      autoFocus, 
      disabled, 
      nativeType, 
      renderButton,
      ...restProps
    } = this.props;

    return (
      <button 
        autoFocus={autoFocus}
        disabled={disabled}
        type={nativeType}
        className="button"
        {...restProps}
      >
        { renderButton ? renderButton() : this.props.children }
      </button>
    )
  }
}

Button.propTypes = {
  autoFocus: propTypes.bool,
  disabled: propTypes.bool,
  nativeType: propTypes.oneOf(['button', 'submit', 'reset']),
  renderButton: propTypes.func
}

Button.defaultProps = {
  autoFocus: false,
  disabled: false,
  nativeType: 'button',
  renderButton: null
}
