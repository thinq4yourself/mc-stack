/* global document */
/* WIP 8-4-18 */
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import DevTools from "mobx-react-devtools";

import configureStore from '../store/index';
import registerServiceWorker from './register-service-worker';

import Routes from './routes/index';

// Components
import Loading from './components/Loading';

// Load Sass
require('./styles/style.scss');

const rootElement = document.getElementById('root');

const Root = ({ store }) => (
  <Root store={store}>
    <DevTools />
    <Router>
      <Routes />
    </Router>
  </Root>
);

render(<Root />, rootElement);
registerServiceWorker();
