import { createStackNavigator } from 'react-navigation';
import WelcomeScreen from '../components/WelcomeScreen'
import SignInScreen from '../components/SignInScreen'
import SignUpScreen from '../components/SignUpScreen'


const AuthStackNavigator = createStackNavigator({
    Welcome: WelcomeScreen,
    SignIn: SignInScreen,
    SignUp: SignUpScreen
})

export default AuthStackNavigator;