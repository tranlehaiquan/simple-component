import React, { Component } from 'react';
import Button from './components/Button/Button';
import { hot } from 'react-hot-loader';

class App extends Component {
	render() {
		return (
			<div style={styles.wrapper}>
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
