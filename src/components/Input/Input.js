import React, { forwardRef } from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';
import isString from 'lodash/isString';
import Icon from '../Icon/Icon';

function Prefix(prefix) {
  return <div className="sp-input__prefix">{prefix}</div>;
}

function Suffix(suffix) {
  return <div className="sp-input__suffix">{suffix}</div>;
}

function IconType(className) {
  return (icon) => {
    const iconIsString = isString(icon);
    if(iconIsString) return <Icon name={icon} className={className} />;
  
    // If it is Node
    return React.cloneElement(icon, { className });
  };
}

const PrefixIcon = IconType('sp-input__prefix-icon');
const SuffixIcon = IconType('sp-input__suffix-icon');

const Input = forwardRef((props, ref) => {
  const { 
    placeholder, 
    readOnly, 
    name, 
    size, 
    disabled, 
    required, 
    className, 
    // clearable,
    // autoComplete,
    nativeAutoComplete,
    onBlur,
    onFocus,
    onChange,
    prefix,
    suffix,
    prefixIcon,
    suffixIcon,
    ...restProps
  } = props;
  const wrapperClassName = classnames('sp-input', {
    [`sp-input--size-${size}`]: size,
    ['sp-input--disabled']: disabled,
    ['sp-input--prefix']: prefix,
    ['sp-input--suffix']: suffix,
    ['sp-input--prefix-icon']: prefixIcon,
    ['sp-input--suffix-icon']: suffixIcon,
  }, className);

  function handleOnChange(e) {
    const { value } = e.target;

    onChange(value, e);
  }

  return (
    <div className={wrapperClassName}>
      { prefix && Prefix(prefix) }
      <div className="sp-input__content">
        {prefixIcon && PrefixIcon(prefixIcon)}
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
        {suffixIcon &&  SuffixIcon(suffixIcon)}
      </div>
      { suffix && Suffix(suffix) }
    </div>
  );
});

Input.propTypes = {
  className: propTypes.string,
  placeholder: propTypes.string,
  readOnly: propTypes.bool,
  name: propTypes.string,
  size: propTypes.oneOf(['md', 'sm', 'xs']),
  disabled: propTypes.bool,
  required: propTypes.bool,
  maxLength: propTypes.number,
  minLength: propTypes.number,
  // clearable: propTypes.bool,
  autoComplete: propTypes.bool,
  nativeAutoComplete: propTypes.bool,
  onFocus: propTypes.func,
  onBlur: propTypes.func,
  onChange: propTypes.func,
  prefixIcon: propTypes.oneOfType([propTypes.string, propTypes.node]),
  suffixIcon: propTypes.oneOfType([propTypes.string, propTypes.node]),
  prefix: propTypes.string,
  suffix: propTypes.string
};

Input.defaultProps = {
  className: '',
  placeholder: '',
  readOnly: false,
  disabled: false,
  name: '',
  required: false,
  // clearable: false,
  // autoComplete: false,
  nativeAutoComplete: false,
  onFocus: () => undefined,
  onBlur: () => undefined,
  onChange: () => undefined,
  prefixIcon: '',
  suffixIcon: '',
  prefix: '',
  suffix: ''
};

export default Input;
