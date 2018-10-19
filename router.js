import React from 'react';
import { View } from 'react-native';
import { Route } from 'react-router-native'
import Home from './components/Home';
import Messenger from './components/Messenger';



const Routers = () => (
    <View>
        <Route exact path="/" component={Home} />
        <Route exact path="/messenger" component={Messenger} />
    </View>
);

export default Routers;