import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import allStores from './stores';
import AppNavigator from './containers/App';

export default class App extends Component {
  render() {
    return (
      <Provider {...allStores}>
        <AppNavigator />
      </Provider>
    );
  }
}
