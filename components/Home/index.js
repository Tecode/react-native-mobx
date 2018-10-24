import React from 'react';
import { ScrollView } from 'react-native';
import { List, ListItem } from 'react-native-elements'
import { inject, observer } from 'mobx-react';
import { styles } from './style';

const Home = ({ navigation, homeStore }) => {
    return (
        <ScrollView>
            <List containerStyle={{ marginBottom: 20 }}>
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
export default inject('homeStore')(observer(Home));