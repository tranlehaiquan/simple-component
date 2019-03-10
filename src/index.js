import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/index.scss';
import { AppContainer } from 'react-hot-loader';
import App from './App';

ReactDOM.render(<AppContainer><App /></AppContainer>, document.getElementById('root'));

if(module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    ReactDOM.render(<NextApp />, document.getElementById('root'));
  });
}
