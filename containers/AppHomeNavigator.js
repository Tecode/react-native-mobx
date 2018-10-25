import { createStackNavigator } from 'react-navigation';
import Detail from '../components/Detail';
import Home from '../components/Home';

const HomeNavigator = createStackNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: () => ({
                title: '首页',
                headerStyle: true,
                headerStyle: {
                    backgroundColor: '#f1f1f1', //#EC414D
                    fontSize: 14
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