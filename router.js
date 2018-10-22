import { createStackNavigator } from 'react-navigation';
import HomeScreen from './components/Home';
import Messenger from './components/Messenger';



const Routers = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
        },
        Messenger: {
            screen: Messenger,
        },
    }, {
        initialRouteName: 'Home',
    }
);

export default Routers;