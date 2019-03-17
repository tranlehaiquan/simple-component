import React from 'react';
import ICON from './selection.json';
import propTypes from 'prop-types';
import classnames from 'classnames';

function Icon(props) {
  const { width, height, name, className } = props;
  const iconPath = ICON[name];

  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 1024 1024" 
      className={classnames('sp-icon', className)}
    >
      <path d={iconPath}></path>
    </svg>
  );
}

Icon.propTypes = {
  width: propTypes.number,
  height: propTypes.number,
  tilte: propTypes.string,
  description: propTypes.string,
  name: propTypes.string.isRequired,
  className: propTypes.string
};

Icon.defaultProps = {
  width: 22,
  height: 22,
  tilte: '',
  description: '',
  className: ''
};

export default Icon;
