import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import Messenger from '../components/Messenger';
import Drawer from '../components/Drawer';


const AppDrawerNavigator = createStackNavigator(
    {
        Messenger: {
            screen: Messenger,
            navigationOptions: () => ({
                title: '1414',
            }),
        },
        Drawer: {
            screen: Drawer,
            navigationOptions: () => ({
                title: '信息',
            }),
        },
    }
);

export default class App extends Component {
    render() {
        return <AppDrawerNavigator />
    }
};