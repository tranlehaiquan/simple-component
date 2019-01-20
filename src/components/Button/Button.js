import React, { Component } from 'react'
import propTypes from 'prop-types';
import classnames from 'classnames';

export default class Button extends Component {
  render() {
    const { 
      autoFocus, 
      disabled, 
      nativeType, 
      renderButton,
      type,
      loading,
      ...restProps
    } = this.props;

    const btnTypeClassname = type ? `button--${type}` : '';
    const btnClassnames = classnames('button', btnTypeClassname, {
      'button--disabled': disabled
    });

    return (
      <button 
        autoFocus={autoFocus}
        disabled={disabled}
        type={nativeType}
        className={btnClassnames}
        {...restProps}
      >
        { this.props.children }
      </button>
    )
  }
}

Button.propTypes = {
  autoFocus: propTypes.bool,
  disabled: propTypes.bool,
  type: propTypes.string,
  nativeType: propTypes.oneOf(['button', 'submit', 'reset']),
  // icon: propTypes.string,
  // loading: propTypes.bool
}

Button.defaultProps = {
  autoFocus: false,
  disabled: false,
  type: '',
  nativeType: 'button',
  // icon: '',
  // loading: false
}
