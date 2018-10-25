import React, { Component } from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import { View, Text } from 'react-native';
import Home from '../components/Home';
import Messenger from '../containers/AppDrawerNavigator';



const HomeNavigator = createStackNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: () => ({
                title: '首页',
            }),
        },
    });

const AppBottomTabNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: HomeNavigator,
            navigationOptions: () => ({
                tabBarIcon: ({ tintColor }) => <Icon name='message' size={30} color={tintColor} />
            })
        },
        Messenger: {
            screen: Messenger,
            navigationOptions: () => ({
                tabBarIcon: ({ tintColor }) => <Icon name='account-circle' size={32} color={tintColor} />
            })
        },
    },
    {
        initialRouteName: 'Home',
        tabBarOptions: {
            activeTintColor: 'red',
            inactiveTintColor: 'grey',
        }
    }
);

export default class App extends Component {
    render() {
        return <AppBottomTabNavigator />
    }
};