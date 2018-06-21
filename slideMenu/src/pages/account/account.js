/**
 * Created by Administrator on 2018/6/5 0005.
 */
import React,{ Component } from 'react';

import {
    StyleSheet,
    View,
    Text,
    Button,
    Platform
} from 'react-native';

type
Props = {};


export default class account extends Component<Props> {
    static navigationOption = {
        title: '账户'
    };
    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <Text>欢迎来到账户主页</Text>
                <Button title="返回" onPress={()=>navigation.goBack()}/>
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
