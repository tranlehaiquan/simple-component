import { configure, addDecorator } from '@storybook/react';
import React from 'react';

// add global decorator
const wrapper = (story) => <div style={styles.wrapper}>{story()}</div>;
addDecorator(wrapper);

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

const styles = {
  wrapper: {
    padding: '1em'
  }
};
