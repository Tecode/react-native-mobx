import React from 'react';
import { Text, View, Button } from 'react-native';

const Messenger = ({ navigation }) => {
    return (
        <View>
            <Button
                title="首页"
                underlayColor="#f0f4f7"
                onPress={() => {navigation.navigate('Drawer')}}
            />
            <Text>hello world</Text>
        </View>
    )
}

export default Messenger;