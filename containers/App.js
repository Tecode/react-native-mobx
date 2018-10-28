import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";

import { createSwitchNavigator, createStackNavigator, createDrawerNavigator, createBottomTabNavigator } from 'react-navigation'
import AuthLoadingScreen from '../components/AuthLoadingScreen'
import DetailScreen from '../components/DetailScreen'
import AuthStackNavigator from './AuthStackNavigator';
import AppBottomTabNavigator from './AppBottomTabNavigator';




const AppStackNavigator = createStackNavigator({
    AppBottomTabNavigator: {
        screen: AppBottomTabNavigator,
        navigationOptions: ({ navigation }) => ({
            title: 'Your App',
            // headerLeft: (
            //     <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            //         <View style={{ paddingHorizontal: 10 }}>
            //             <Icon name="menu" size={24} />
            //         </View>
            //     </TouchableOpacity>
            // ),
            headerTitleStyle: {
                flex: 1,
                textAlign: 'center',
                fontSize: 16,
                color: '#fff'
            },
            headerStyle: {
                backgroundColor: '#EC414D', //#EC414D
                height: 30
            },
        })
    },
    DetailScreen
})

AppBottomTabNavigator.navigationOptions = ({ navigation }) => {
    let { routeName } = navigation.state.routes[navigation.state.index];

    // You can do whatever you like here to pick the title based on the route name
    let headerTitle = routeName;

    return {
        headerTitle,
    };
};

const AppDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: AppStackNavigator,
        contentOptions: {
            activeTintColor: '#EC414D',
            itemsContainerStyle: {
              marginVertical: 0,
            },
            iconContainerStyle: {
              opacity: 1
            },
          }
    },
}, {
    
    }
)

export default createSwitchNavigator({
    AuthLoading: AuthLoadingScreen,
    Auth: AuthStackNavigator,
    App: AppDrawerNavigator
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});