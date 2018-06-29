/**
 * Created by Administrator on 2018/6/5 0005.
 */
import React,{ Component } from 'react';
import  Swiper from 'react-native-swiper';

import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
	Dimensions,
	Image
} from 'react-native';

type
Props = {};
const {width, heihgt} = Dimensions.get('window');
export default class home extends Component<Props> {
	constructor (props){
		super(props);
		this.state = {
			bannerList:[]
		}
	}
    render () {
        const {navigation} = this.props;
		let bannerList = this.state.bannerList
        return (
			<View>
				<View style={styles.container}>
					<Swiper style={styles.wrapper} height={40} autoplay
							onMomentumScrollEnd={(e,state,context)=>console.log('index',state.index)}
							dot={<View style={{backgroundColor:'rgba(0,0,0,.5)', width: 8, height: 8,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
							activeDot={<View style={{backgroundColor: 'blue', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
							paginationStyle={{
							bottom: 20,justifyContent: 'center'
							}}
							loop>
						<View style={styles.slide} >
							<Image resizeMode='stretch' style={styles.image} source={require('../../../res/img/banner/autoExtend-banner.jpg')} />
						</View>
						<View style={styles.slide}>
							<Image resizeMode='stretch' style={styles.image} source={require('../../../res/img/banner/bbs-come-back.jpg')} />
						</View>
						<View style={styles.slide} >
							<Image resizeMode='stretch' style={styles.image} source={require('../../../res/img/banner/bbs-swiper11.jpg')} />
						</View>
						<View style={styles.slide}>
							<Image resizeMode='stretch' style={styles.image} source={require('../../../res/img/banner/swiper-xyx.jpg')} />
						</View>
						{/*{
							bannerList.map((item)=>{
								console.log(111)
								return 	<View style={styles.slide}>
											<Image resizeMode='stretch' style={styles.image} source={item.img_dir} />
										</View>
							})
						}*/}
					</Swiper>
				</View>
				<Text>我是swiper图</Text>
				<Button title="go back" onPress={() => {}}/>
			</View>
        )
    }
	getBannerList(){
		let formData = new FormData();
		formData.append('type',3)
		fetch('http://www.xitouwang.com/public/getBannerList',{
			method:'POST',
			body:formData
		}).then((response)=>{
			if(response.ok){
				return response.json();
			}
		}).then((json)=>{
			console.log(json);
			this.bannerList = json;
		}).catch((error)=>{
			console.error(error)
		})
	}
	componentDidMount(){
		this.getBannerList()
	}
}

const styles = StyleSheet.create({
	container: {
		height:180,
		width:width
	},

	wrapper: {
		width:width,
		height:180
	},

	slide: {
		flex:1,
		justifyContent: 'center',
		backgroundColor: 'transparent'
	},

	slide1: {
		flex:1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#9DD6EB'
	},

	text: {
		color: '#fff',
		fontSize: 30,
		fontWeight: 'bold'
	},
	image: {
		width:width,
		flex: 1
	}
});