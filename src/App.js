import React, { Component } from 'react';
import Button from './components/Button/Button';
import { hot } from 'react-hot-loader';
import Radio from './components/Radio/Radio';
import RadioGroup from './components/Radio/RadioGroup';
import Checkbox from './components/Checkbox/Checkbox';
import CheckboxGroup from './components/Checkbox/CheckboxGroup';
import Toast from './components/Message/Toast';

const options = [1, 2, 3];

class App extends Component {
  state = {
    value: '1',
    checkboxValue: [1],
    indeterminate: true,
    checkboxCheckedAll: false,
    show: true
  };

  handleOnChange = value => this.setState({ value });

  handleCheckboxChange = (value, { target }) => {
    const { checkboxValue } = this.state;

    if (target.checked) {
      checkboxValue.push(value);
    } else {
      const indexOfValue = checkboxValue.indexOf(value);
      checkboxValue.splice(indexOfValue, 1);
    }

    this.setState({
      checkboxValue,
      indeterminate: checkboxValue.length > 0 && checkboxValue.length < options.length,
      checkboxCheckedAll: checkboxValue.length === options.length
    });
  };

  handleCheckAllCheckbox = (value, event) => {
    const checkboxValue = event.target.checked ? [1, 2, 3] : [];

    this.setState({
      checkboxCheckedAll: event.target.checked,
      checkboxValue,
      indeterminate: false
    });
  }

  render() {
    const {value, checkboxValue, indeterminate, checkboxCheckedAll, show} = this.state;

    return (
      <div style={styles.wrapper}>
        <div style={{ padding: '1em' }}>
          <Toast 
            message="Hello the world???" 
            show={show} 
            close={() => {
              this.setState({show: false});
            }}
            duration={1500}
          />
          <button onClick={() => {this.setState({show: !show});}}>Toggle</button>
        </div>
        <div style={{ padding: '1em' }}>
          <Checkbox 
            indeterminate={indeterminate}
            onChange={this.handleCheckAllCheckbox}
            checked={checkboxCheckedAll}
          >
            Check all
          </Checkbox>

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
