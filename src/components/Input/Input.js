import React, { forwardRef } from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';

const Input = forwardRef((props, ref) => {
  const { 
    placeholder, 
    readOnly, 
    name, 
    size, 
    disabled, 
    required, 
    className, 
    clearable,
    autoComplete,
    nativeAutoComplete,
    onBlur,
    onFocus,
    onChange,
    ...restProps
  } = props;
  const wrapperClassName = classnames('sp-input', {
    [`sp-input--size-${size}`]: size,
    ['sp-input--disabled']: disabled
  });

  function handleOnChange(e) {
    const { value } = e.target;

    onChange(value, e);
  }

  return (
    <div className={wrapperClassName}>
      <input
        className="sp-input__inner"
        placeholder={placeholder}
        readOnly={readOnly}
        name={name}
        disabled={disabled}
        required={required}
        ref={ref}
        onChange={handleOnChange}
        onBlur={onBlur}
        onFocus={onFocus}
        autoComplete={nativeAutoComplete.toString()}
        {...restProps}
      />
    </div>
  );
});

Input.propTypes = {
  placeholder: propTypes.string,
  readOnly: propTypes.bool,
  name: propTypes.string,
  size: propTypes.oneOf(['md', 'sm', 's']),
  disabled: propTypes.bool,
  required: propTypes.bool,
  maxLength: propTypes.number,
  minLength: propTypes.number,
  clearable: propTypes.bool,
  autoComplete: propTypes.bool,
  nativeAutoComplete: propTypes.bool,
  onFocus: propTypes.func,
  onBlur: propTypes.func,
  onChange: propTypes.func,
};

Input.defaultProps = {
  placeholder: '',
  readOnly: false,
  disabled: false,
  name: '',
  required: false,
  clearable: false,
  autoComplete: false,
  nativeAutoComplete: false,
  onFocus: () => undefined,
  onBlur: () => undefined,
  onChange: () => undefined,
};

export default Input;
