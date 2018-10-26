import React from 'react'
import { createBottomTabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import HomeScreen from '../components/HomeScreen';
import SettingsScreen from '../components/SettingsScreen';




const AppBottomTabNavigator = createBottomTabNavigator({
    HomeScreen: {
        screen: HomeScreen,
        navigationOptions: () => ({
            tabBarLabel: '消息',
            tabBarIcon: ({ tintColor }) => <Icon name='message' size={30} color={tintColor} />
        })
    },
    Settings: {
        screen: SettingsScreen,
        navigationOptions: () => ({
            tabBarLabel: '设置',
            tabBarIcon: ({ tintColor }) => <Icon name='account-circle' size={32} color={tintColor} />
        })

    }
}, {
        initialRouteName: 'HomeScreen',
        tabBarOptions: {
            activeTintColor: '#EC414D',
            inactiveTintColor: '#4c4c4c',
        }
    })

export default AppBottomTabNavigator;