import React, { Component } from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import HomeNavigator from '../containers/AppHomeNavigator';
import Messenger from '../containers/AppDrawerNavigator';




const AppBottomTabNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: HomeNavigator,
            navigationOptions: ({ navigation }) => {
                return ({
                    tabBarVisible: navigation.state.index !== 1,
                    tabBarLabel: '消息',
                    tabBarIcon: ({ tintColor }) => <Icon name='message' size={30} color={tintColor} />
                })
            }
        },
        Messenger: {
            screen: Messenger,
            navigationOptions: () => ({
                tabBarLabel: '设置',
                tabBarIcon: ({ tintColor }) => <Icon name='account-circle' size={32} color={tintColor} />
            })
        },
    },
    {
        initialRouteName: 'Home',
        tabBarOptions: {
            activeTintColor: '#EC414D',
            inactiveTintColor: '#4c4c4c',
        }
    }
);

export default class App extends Component {
    render() {
        return <AppBottomTabNavigator />
    }
};