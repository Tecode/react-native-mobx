import React from 'react';
import { View, Button } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';

const Drawer = ({ navigation }) => {
    return (
        <View>
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
        </View>
    )
}

export default Drawer;