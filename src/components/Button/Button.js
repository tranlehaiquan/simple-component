import React, { memo } from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';

function Button(props) {
  const {
    autoFocus,
    disabled,
    nativeType,
    type,
    children,
    onClick,
    ...restProps
  } = props;

  const btnTypeClassname = type ? `sp-button--${type}` : '';
  const btnClassnames = classnames('sp-button', btnTypeClassname, {
    'sp-button--disabled': disabled,
  });

  return (
    <button
      autoFocus={autoFocus}
      disabled={disabled}
      type={nativeType}
      className={btnClassnames}
      onClick={onClick}
      {...restProps}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  autoFocus: propTypes.bool,
  disabled: propTypes.bool,
  type: propTypes.string,
  nativeType: propTypes.oneOf(['button', 'submit', 'reset']),
  children: propTypes.node,
  onClick: propTypes.func,
  // icon: propTypes.string,
  // loading: propTypes.bool
};

Button.defaultProps = {
  autoFocus: false,
  disabled: false,
  type: '',
  nativeType: 'button',
  children: null,
  onClick: () => undefined
  // icon: '',
  // loading: false
};

export default memo(Button);
