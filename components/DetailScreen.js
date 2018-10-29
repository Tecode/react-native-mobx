import React from 'react'
import { View, Text, FlatList } from 'react-native'


const Detail = () => {
    const array = [
        { key: 'a' }, { key: 'b' }, { key: 'a' }, { key: 'b' }, { key: 'a' }, { key: 'b' }, { key: 'a' }, { key: 'b' }, { key: 'a' }, { key: 'b' }, { key: 'a' }, { key: 'b' },
        { key: 'a' }, { key: 'b' },{ key: 'a' }, { key: 'b' },{ key: 'a' }, { key: 'b' },{ key: 'a' }, { key: 'b' },{ key: 'a' }, { key: 'b' },{ key: 'a' }, { key: 'b' },
        { key: 'a' }, { key: 'b' },{ key: 'a' }, { key: 'b' },{ key: 'a' }, { key: 'b' },{ key: 'a' }, { key: 'b' },{ key: 'a' }, { key: 'b' },{ key: 'a' }, { key: 'b' },
        { key: 'a' }, { key: 'b' },{ key: 'a' }, { key: 'b' },{ key: 'a' }, { key: 'b' },{ key: 'a' }, { key: 'b' },{ key: 'a' }, { key: 'b' },{ key: 'a' }, { key: 'b' },
    ];
    return (
        <View>
            <FlatList
                data={array}
                renderItem={({ item }) => <Text>{item.key}</Text>}
            />
        </View>
    )
};

export default Detail;