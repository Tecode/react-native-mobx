import React from 'react';
import { Text, View, Button } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import { styles } from './style';

const Drawer = ({ navigation }) => {
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
            <Text style={styles.title}>Drawer</Text>
            <Text style={styles.welcome}>Welcome to React Native!</Text>
            <Text style={styles.instructions}>To get started, edit App.js</Text>
        </View>
    )
}

export default Drawer;