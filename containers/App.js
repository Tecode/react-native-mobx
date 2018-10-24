import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import DrawerNavigator from './AppDrawerNavigator';
import BottomTabNavigator from './AppBottomTabNavigator';

const AppStackNavigator = createStackNavigator({
    BottomTabNavigator: { screen: BottomTabNavigator },
    DrawerNavigator: { screen: DrawerNavigator }
});


export default class App extends Component {
    render() {
        return <AppStackNavigator />;
    }
}