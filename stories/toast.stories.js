import React from 'react';
import '../styles/index.scss';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Toast from '../src/components/Message/Toast';

class TestToast extends React.PureComponent {
  state = {
    show: false
  }

  toggleToast = () => {
    this.setState(({show}) => ({
      show: !show
    }));

    action('toggle toast');
  }

  render() {
    const { show } = this.state;

    return (
      <>
        <Toast
          message="Hello the world???" 
          show={show} 
          close={() => {
            this.setState({show: false});
            action('close toast');
          }}
          duration={1500}
        />
        <button onClick={this.toggleToast}>Click me!</button>
      </>
    );
  }
}

storiesOf('Toast message', module)
  .addDecorator((story) => <div style={styles.wrapper}>{story()}</div>)
  .add('Normal Toast', () => (
    <TestToast />
  ));


const styles = {
  wrapper: {
    padding: '1em'
  }
}
