import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { List, ListItem } from 'react-native-elements'
import { inject, observer } from 'mobx-react';

const Home = ({ navigation, homeStore }) => {
    return (
        <ScrollView>
            <List>
                {
                    homeStore.listData.map((item) => (
                        <ListItem
                            roundAvatar
                            avatar={{ uri: item.avatar_url }}
                            subtitle={item.subtitle}
                            key={item.name}
                            title={item.name}
                        />
                    ))
                }
            </List>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    title: {
        color: '#333',
        fontSize: 20
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

export default inject('homeStore')(observer(Home));