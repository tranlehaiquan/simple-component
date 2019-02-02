import React, { Component } from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';

class Radio extends Component {
	handleClick = () => {
		const { onChange, value } = this.props;

		onChange(value);
	}
	
	render() {
		const { children, checked, value, name } = this.props;
		const classnameRadio = classnames('sp-radio__item', {
			['sp-radio__item--checked']: checked 
		});

		return (
			<label className={classnameRadio} onClick={this.handleClick}>
				<input 
					type="radio"
					className="sp-radio__input" 
					name={name} 
					value={value} 
					tabIndex="-1" 
					checked={checked}
				/>
				<span className="sp-radio__icon" tabIndex="0" />
				<span className="sp-radio__text">{ children }</span>
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
		propTypes.bool
	]),
	name: propTypes.string
};

Radio.defaultProps = {
	checked: false
};

export default Radio;
