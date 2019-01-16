import React, { Component } from 'react'
import propTypes from 'prop-types';
import './Button.scss';

export default class Button extends Component {
  render() {
    const { onClick } = this.props;

    return (
      <button onClick={onClick} className="sp_button">
        Test
      </button>
    )
  }
}

Button.propTypes = {
  onClick: propTypes.func
}

Button.defaultProps = {
  onClick: () => {
    console.log('click')
  }
}
