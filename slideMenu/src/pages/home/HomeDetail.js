/**
 * Created by Administrator on 2018/6/5 0005.
 */
import React,{ Component } from 'react';
// import {
//     createStackNavigator,
// } from 'react-navigation';
import {
    StyleSheet,
    View,
    Text,
    Button,
    Platform
} from 'react-native';

type
    Props = {};


export default class HomeDetail extends Component<Props> {
    static navigationOption = {
        title: 'home详情'
    };
    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <Text>homeDetail组件页面</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#eeeeee'
    }
});