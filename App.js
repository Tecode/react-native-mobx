import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import allStores from './stores';
import HomeScreen from './containers/HomeScreen';
// import Drawer from './containers/Drawer';

export default class App extends Component {
  render() {
    return (
      <Provider {...allStores}>
        <HomeScreen />
      </Provider>
    );
  }
}
