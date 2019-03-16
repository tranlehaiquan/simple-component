import React from 'react';
import { icons } from './selection.json';
import propTypes from 'prop-types';

function getPath(name) {
  const icon = icons.find((icon) => {
    return icon.properties.name === name;
  });

  if (icon) {
    return icon.icon.paths.join(' ');
  } else {
    return '';
  }
}

function Icon(props) {
  const { width, height, name } = props;
  const iconPath = getPath(name);

  return (
    <svg width={width} height={height} viewBox="0 0 1024 1024" className="sp-icon">
      <path d={iconPath}></path>
    </svg>
  );
}

Icon.propTypes = {
  width: propTypes.number,
  height: propTypes.number,
  tilte: propTypes.string,
  description: propTypes.string,
  name: propTypes.string.isRequired
};

Icon.defaultProps = {
  width: 22,
  height: 22,
  tilte: '',
  description: ''
};

export default Icon;
