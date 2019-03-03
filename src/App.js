import React, { Component } from 'react';
import Button from './components/Button/Button';
import { hot } from 'react-hot-loader';
import Radio from './components/Radio/Radio';
import RadioGroup from './components/Radio/RadioGroup';
import Checkbox from './components/Checkbox/Checkbox';
import CheckboxGroup from './components/Checkbox/CheckboxGroup';

class App extends Component {
  state = {
    value: 1,
    checkboxValue: [1]
  };

  handleOnChange = value => this.setState({ value });

  handleCheckboxChange = value => {
    const { checkboxValue } = this.state;

    if (!checkboxValue.includes(value)) {
      checkboxValue.push(value);
      this.setState(({
        checkboxValue
      }));
      return;
    }

    const indexOfValue = checkboxValue.indexOf(value);
    checkboxValue.splice(indexOfValue, 1);

    this.setState({
      checkboxValue
    });
  };

  render() {
    const {value, checkboxValue} = this.state;

    return (
      <div style={styles.wrapper}>
        <div style={{ padding: '1em' }}>
          <CheckboxGroup onChange={this.handleCheckboxChange} value={checkboxValue}>
            <Checkbox value={1}/>
            <Checkbox value={2}/>
            <Checkbox value={3}/>
          </CheckboxGroup>
        </div>
        <div style={{ padding: '1em' }}>
          <RadioGroup
            name="hello"
            value={value}
            onChange={this.handleOnChange}
          >
            <Radio value="1">Option 1</Radio>
            <Radio value="2" disabled>
              Option 2
            </Radio>
            <Radio value="3">Option 3</Radio>
          </RadioGroup>
        </div>
        <div>
          <Button style={styles.btn}>Simple button</Button>
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
