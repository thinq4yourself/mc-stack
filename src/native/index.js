// WIP 8-11-18

import React from 'react';
import { StatusBar, Platform } from 'react-native';
import PropTypes from 'prop-types';
import { Router, Stack } from 'react-native-router-flux';
import DevTools from "mobx-react-devtools";

import { Root, StyleProvider } from 'native-base';
import getTheme from '../../native-theme/components';
import theme from '../../native-theme/variables/commonColor';

import Main from './components/main';
import Routes from './routes/index';
import Loading from './components/Loading';

// Hide StatusBar on Android as it overlaps tabs
if (Platform.OS === 'android') StatusBar.setHidden(true);

const App = ({ store }) => (
  <Root>
    <DevTools />
    <Main store={store}>
      <StyleProvider style={getTheme(theme)}>
        <Router>
          <Stack key="root">
            {Routes}
          </Stack>
        </Router>
      </StyleProvider>
    </Main>
  </Root>
);

App.propTypes = {
  store: PropTypes.shape({}).isRequired,
};

export default App;
