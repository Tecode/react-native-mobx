import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import { View, Text } from 'react-native';
import Home from '../components/Home';
import Messenger from '../components/Messenger';



const HomeScreen = createBottomTabNavigator(
    {
        Home: {
            title: 'Home',
            screen: Home,
            navigationOptions: () => ({
                title: `信息`,
                headerTitle: <View><Text>46</Text></View>,
                tabBarIcon: ({ tintColor }) => <Icon name='message' size={30} color={tintColor} />
            })
        },
        Messenger: {
            screen: Messenger,
            navigationOptions: () => ({
                headerTitle: '设置',
                title: `设置`,
                tabBarIcon: ({ tintColor }) => <Icon name='account-circle' size={32} color={tintColor} />
            })
        },
    },
    {
        initialRouteName: 'Home',
        activeColor: '#f0edf6',
        inactiveColor: '#3e2465',
        barStyle: { backgroundColor: '#4c4c4c' },
    }
);

export default HomeScreen;