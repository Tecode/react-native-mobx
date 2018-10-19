import { action, observable } from 'mobx';
import { Alert } from 'react-native';

class HomeStore {
    @observable name = 'ReactNative';
    @action.bound alert() {
        Alert.alert('Mobx调用alert!')
    }
}

export default new HomeStore();