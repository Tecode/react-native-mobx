import React, { Component } from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import { View, Text } from 'react-native';
import Home from '../components/Home';
import Messenger from '../components/Messenger';



const AppBottomTabNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: () => ({
                headerTitle: <View><Text>46</Text></View>,
                tabBarIcon: ({ tintColor }) => <Icon name='message' size={30} color={tintColor} />
            })
        },
        Messenger: {
            screen: Messenger,
            navigationOptions: () => ({
                tabBarLabel: `设置`,
                tabBarIcon: ({ tintColor }) => <Icon name='account-circle' size={32} color={tintColor} />
            })
        },
    },
    {
        initialRouteName: 'Home',
        shifting: true,
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