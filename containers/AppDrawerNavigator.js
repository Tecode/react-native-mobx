import React, { Component } from 'react';
import { createDrawerNavigator } from 'react-navigation';
import Messenger from '../components/Messenger';
import Drawer from '../components/Drawer';


const AppDrawerNavigator = createDrawerNavigator(
    {
        Messenger: {
            title: 'Messenger',
            screen: Messenger,
        },
        Drawer: {
            screen: Drawer,
        },
    }
);

export default class App extends Component {
    render() {
        return <AppDrawerNavigator />
    }
};