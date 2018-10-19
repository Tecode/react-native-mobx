import React from 'react';
import { Text, View } from 'react-native';
import { inject, observer } from 'mobx-react';
import { styles } from './style';

const Home = ({ homeStore }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>首页{homeStore.name}</Text>
            <Text style={styles.welcome}>Welcome to React Native!</Text>
            <Text style={styles.instructions}>To get started, edit App.js</Text>
        </View>
    )
}

export default inject('homeStore')(observer(Home));