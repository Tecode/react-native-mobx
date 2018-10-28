import React from 'react';
import { View, Button } from 'react-native';

const Drawer = ({ navigation }) => {
    return (
        <View>
            <Button
                title="返回"
                underlayColor="#f0f4f7"
                onPress={() => navigation.goBack()} />
        </View>
    )
}

export default Drawer;