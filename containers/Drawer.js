import { createDrawerNavigator } from 'react-navigation';
import Home from './component/Home';
import Drawer from '../components/Drawer';



const Drawer = createDrawerNavigator(
    {
        Home: {
            title: 'Home',
            screen: Home,
        },
        Drawer: {
            screen: Drawer,
        },
    }
);

export default Drawer;