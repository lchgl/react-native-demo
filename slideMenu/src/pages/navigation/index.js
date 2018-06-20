/**
 * Created by Administrator on 2018/6/12 0012.
 */
import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    Platform,
    StyleSheet,
    Dimensions
} from 'react-native';
//import {createStackNavigator,createTabNavigator} from 'react-navigation';
import TabNavigator from 'react-native-tab-navigator';

import home from '../home/home';
import find from '../find/find';
import account from '../account/account';
import bbs from '../bbs/bbs';

export default class navigation extends Component {
    static navigationOptions = {
        header:null  //隐藏顶部导航栏
    };
    constructor(props){
        super(props);
        const page = this.props.navigation.state.page?this.props.navigation.state.page:'首页';
        this.state = {
            selectedTab:page
        }
    }
    renderTabNavigator(selectedTab, icon,selectedIcon, Component) {
        return (
            <TabNavigator.Item
                selected={this.state.selectedTab === selectedTab}
                selectedTitleStyle={styles.selectedTabText}
                titleStyle={styles.tabText}
                title={selectedTab}
                renderIcon={() => <Image style={styles.icon} source={icon} />}
                renderSelectedIcon={() => <Image style={styles.icon} source={selectedIcon} />}
                onPress={() => {
          this.setState({selectedTab:selectedTab});
        }}>
                <Component {...this.props}/>
            </TabNavigator.Item>
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <TabNavigator>
                    {this.renderTabNavigator('首页',require('../../../res/img/tab/home.png'),require('../../../res/img/tab/home-active.png'),home)}
                    {this.renderTabNavigator('发现',require('../../../res/img/tab/find.png'),require('../../../res/img/tab/find-active.png'),find)}
                    {this.renderTabNavigator('账户',require('../../../res/img/tab/user.png'),require('../../../res/img/tab/user-active.png'),account)}
                    {this.renderTabNavigator('论坛',require('../../../res/img/tab/bbs.png'),require('../../../res/img/tab/bbs-active.png'),bbs)}
                </TabNavigator>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f7f7f8'
    },
    tabText:{
        color:'#333333',
        fontSize:14
    },
    selectedTabText:{
        color:'#FF4B4A'
    },
    icon:{
        width:22,
        height:22
    }
});
