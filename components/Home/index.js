import React from 'react';
import { Text, View } from 'react-native';
import { inject, observer } from 'mobx-react';
import { styles } from './style';

const Home = ({ homeStore }) => {
    return (
        <View>
            <Text style={styles.title}>首页{ homeStore.homeStore }</Text>
        </View>
    )
}

export default inject('homeStore')(observer(Home));