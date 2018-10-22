import { createBottomTabNavigator } from 'react-navigation';
import Home from '../components/Home';
import Messenger from '../components/Messenger';



const HomeScreen = createBottomTabNavigator(
    {
        Home: {
            title: 'Home',
            screen: Home,
        },
        Messenger: {
            screen: Messenger,
        },
    },
    {
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
        swipeEnabled: true,
        animationEnabled: true,
        lazy: true,
    }
);

export default HomeScreen;