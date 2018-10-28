import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    AsyncStorage
} from "react-native";

const SettingsScreen = ({ navigation }) => {
    const signOut = async () => {
        AsyncStorage.clear()
        navigation.navigate('AuthLoading')
    }
    return (
        <View style={styles.container}>
            <Button title="Sign Out" onPress={signOut} />
            <Button title="打开抽屉" onPress={() => { navigation.openDrawer() }} />
        </View>
    );
}
export default SettingsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});