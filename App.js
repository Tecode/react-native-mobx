import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import allStores from './stores';
import AppBody from './router';

export default class App extends Component {
  render() {
    return (
      <Provider {...allStores}>
        <AppBody />
      </Provider>
    );
  }
}
