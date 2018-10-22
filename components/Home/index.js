import React from 'react';
import { Text, View, Button } from 'react-native';
import { inject, observer } from 'mobx-react';
import { StackActions, NavigationActions } from 'react-navigation';
import { styles } from './style';

const Home = ({ navigation, homeStore }) => {
    return (
        <View style={styles.container}>
            <Button
                title="信息页面"
                underlayColor="#f0f4f7"
                onPress={() => {
                    navigation.dispatch(StackActions.reset({
                        index: 0,
                        actions: [
                            NavigationActions.navigate({ routeName: 'Messenger' })
                        ],
                    }))
                }} />
            <Text style={styles.title}>首页{homeStore.name}</Text>
            <Text style={styles.welcome}>Welcome to React Native!</Text>
            <Text style={styles.instructions}>To get started, edit App.js</Text>
        </View>
    )
}

export default inject('homeStore')(observer(Home));