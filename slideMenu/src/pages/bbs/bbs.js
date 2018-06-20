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


export default class bbs extends Component<Props> {
    static navigationOption = {
        title: '论坛'
    };
    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <Text>欢迎来到论坛,当前论坛正在开发中！</Text>
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
