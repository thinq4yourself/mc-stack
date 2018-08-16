/* WIP 8-4-18 */
import React from 'react';
import Root from './src/native/index';
import store from './src/store/index';

export default function App() {
  return <Root store={store} />;
}
