import { createStackNavigator } from 'react-navigation';
import { Text } from 'react-native';
import Detail from '../components/Detail';
import Home from '../components/Home';

const HomeNavigator = createStackNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: () => ({
                title: '首页',
                headerStyle: true,
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
            }),
        },
        Detail: {
            screen: Detail
        },
    },
    {
        mode: 'screen',
    });

export default HomeNavigator;