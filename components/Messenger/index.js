import React from 'react';
import { Text, View, Button } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';

const Messenger = ({ navigation }) => {
    return (
        <View>
            <Button
                title="首页"
                underlayColor="#f0f4f7"
                onPress={() => {
                    navigation.dispatch(StackActions.reset({
                        index: 0,
                        actions: [
                            NavigationActions.navigate({ routeName: 'Home' })
                        ],
                    }))
                }}
            />
            <Text>消息中心</Text>
        </View>
    )
}

export default Messenger;