/**
 * Created by Administrator on 2018/6/5 0005.
 */
import React,{ Component } from 'react';

import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
} from 'react-native';

type
Props = {};
class TestProps extends Component{
	render(){
		return(
			<Text>{this.props.name?this.props.name:'default'}</Text>
		)
	}
}
class TestState extends Component{
	constructor(props){
		super(props);
		this.state = {
			showText: true
		};
		setInterval(()=>{
			this.setState({showText:!this.state.showText})
		},1000)
	}
	render(){
		let display = this.state.showText?this.props.text:'';
		return (
			<Text>{display}</Text>
		)
	}
}

export default class find extends Component<Props> {
    static navigationOption = {
      title: '发现'
    };
    render () {
        const {navigation} = this.props;
        return (
        <View style={styles.container}>
            <Text>欢迎来到发现页面</Text>
			<TestProps name='windy'/>
			<TestProps/>
			<TestProps>标签对</TestProps>
			<TestState text='TestStatus one'/>
			<TestState/>
			<TestState>1111</TestState>
            <Button title="账户" onPress={()=>navigation.navigate('Home',{page:'账户'})}/>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#eeeeee'
    }
});