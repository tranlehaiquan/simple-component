import React, { Component } from 'react';
import Button from './components/Button/Button';
import { hot } from 'react-hot-loader';
import Radio from './components/Radio/Radio';
import RadioGroup from './components/Radio/RadioGroup';

class App extends Component {
	state = {
		value: 1
	}

	handleOnChange = (value) => this.setState({value})

	render() {
		return (
			<div style={styles.wrapper}>
				<div style={{padding: '1em'}}>
					<RadioGroup 
						name="hello"
						value={this.state.value} 
						onChange={this.handleOnChange} 
					>
						<Radio value="1">Option 1</Radio>
						<Radio value="2">Option 2</Radio>
						<Radio value="3">Option 3</Radio>
					</RadioGroup>
				</div>
				<div>
					<Button style={styles.btn}>
						Simple button
					</Button>
					<Button style={styles.btn} disabled>
						Disabled button
					</Button>
					<Button style={styles.btn} type="primary">
						Primary
					</Button>
					<Button style={styles.btn} type="success">
						Success
					</Button>
					<Button style={styles.btn} type="info">
						Info
					</Button>
					<Button style={styles.btn} type="warning">
						Warning
					</Button>
					<Button style={styles.btn} type="danger">
						Danger
					</Button>
				</div>
				<div>
					<Button style={styles.btn} disabled>
						Disabled button
					</Button>
					<Button style={styles.btn} type="primary" disabled>
						Primary
					</Button>
					<Button style={styles.btn} type="success" disabled>
						Success
					</Button>
					<Button style={styles.btn} type="info" disabled>
						Info
					</Button>
					<Button style={styles.btn} type="warning" disabled>
						Warning
					</Button>
					<Button style={styles.btn} type="danger" disabled>
						Danger
					</Button>
				</div>
			</div>
		);
	}
}

const styles = {
	wrapper: { 
		height: '100vh', 
		width: '100vw', 
		display: 'flex', 
		justifyContent: 'center', 
		alignItems: 'center',
		flexDirection: 'column'
	},
	btn: {
		marginRight: 5,
		marginBottom: 5
	}
};

export default hot(module)(App);
