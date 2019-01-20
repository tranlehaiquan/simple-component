import React, { Component } from 'react'
import Button from './components/Button/Button';
import { hot } from 'react-hot-loader'

class App extends Component {
  render() {
    return (
      <div style={{ height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Button>
          Simple button
        </Button>
        <Button disabled>
          Disabled button
        </Button>
        <Button type="primary">
          Primary
        </Button>
        <Button type="success">
          Success
        </Button>
        <Button type="info">
          Info
        </Button>
        <Button type="warning">
          Warning
        </Button>
        <Button type="danger">
          Danger
        </Button>
      </div>
    )
  }
}

export default hot(module)(App);
