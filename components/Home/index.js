import React from 'react';
import { Text, View, Button } from 'react-native';
import { inject, observer } from 'mobx-react';
import { styles } from './style';

const Home = ({ navigation, homeStore }) => {
    return (
        <View style={styles.container}>
            <Button
                title="打开抽屉"
                underlayColor="#f0f4f7"
                onPress={() => {
                    navigation.openDrawer();
                }} />
            <Text style={styles.title}>首页{homeStore.name}</Text>
            <Text style={styles.welcome}>Welcome to React Native!</Text>
            <Text style={styles.instructions}>To get started, edit App.js</Text>
        </View>
    )
}

export default inject('homeStore')(observer(Home));