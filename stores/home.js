import { action, observable } from 'mobx';
// import { Alert } from 'react-native';

class HomeStore {
    @observable name = 'ReactNativeHot';
    @action.bound alert() {
        console.log(12233);
        // Alert.alert('Mobx调用alert!')
    }
}

export default new HomeStore();