import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import BottomTabNavigator from './AppBottomTabNavigator';

const AppStackNavigator = createStackNavigator(
    {
        BottomTabNavigator: {
            screen: BottomTabNavigator,
        }
    }, {
        headerMode: 'none',
    });


export default class App extends Component {
    render() {
        return <AppStackNavigator />;
    }
}