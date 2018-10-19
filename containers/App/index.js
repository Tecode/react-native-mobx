import React from 'react';
import { View, Text } from 'react-native';
import { NativeRouter, Link, nativeHistory } from 'react-router-native'
import Routers from '../../router';

const AppBody = () => (
    <View>
        <NativeRouter nativeHistory={nativeHistory} >
            <View>
                <Link to="/" underlayColor="#f0f4f7" >
                    <Text>首页</Text>
                </Link>
                <Link to="/messenger" underlayColor="#f0f4f7" >
                    <Text>消息</Text>
                </Link>
                <Routers />
            </View>
        </NativeRouter>
    </View>
);

export default AppBody;
