import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import { AppContainer } from 'react-hot-loader';

import App from './App.js';

// Require Offline Plugin for service workers
require('offline-plugin/runtime').install();

// Initialize Google Analytics
ReactGA.initialize(process.env.GA_ID);

console.log('why are we not logging....');
console.log('GA ID:');
console.log(process.env.GA_ID);

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app'),
  );
};


render(App);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./App.js', () => { render(App); });
}
