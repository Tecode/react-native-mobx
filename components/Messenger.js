import React from 'react';
import { Text, View, Button } from 'react-native';
import { DrawerActions } from 'react-navigation';

const Messenger = ({ navigation }) => {
    return (
        <View>
            <Button
                title="首页"
                underlayColor="#f0f4f7"
                onPress={() => {
                    navigation.navigate('Drawer')
                }}
            />
            <Text>消息中心3665454</Text>
        </View>
    )
}

export default Messenger;