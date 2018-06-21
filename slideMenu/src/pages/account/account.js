/**
 * Created by Administrator on 2018/6/5 0005.
 */
import React,{ Component } from 'react';

import {
    StyleSheet,
    View,
    Text,
    Button,
    Platform,
	Image
} from 'react-native';

type
Props = {};

let REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

export default class account extends Component<Props> {
    static navigationOption = {
        title: '账户'
    };
	constructor(props){
		super(props);
		this.state = {
			movies:null,
		}
	}
    render() {
        if(!this.state.movies){
			return this.rederLoadingView();
		}
		let movie = this.state.movies[0];
		return this.rederMovies(movie);
    }
	fetchData(){
		fetch(REQUEST_URL,{
			method:'GET'
		}).then((responseData)=>{
			this.setState({
				movies:resposeData.movies,
			})
			console.log(responseData)
		}).catch((error)=>{
			console.log(error)
		})
	}
	componentDidMount(){
		this.fetchData();
	}
	rederLoadingView(){
		return (
			<View style={styles.container}> 
				<Text>
					正在加载电影数据···
				</Text>
			</View>
		)
	}
	rederMovies(movie){
		return (
			<View style={styles.container}>
					<Image source={{uri:movie.posters.thumbnail}} style={styles.thumbnail} />
					<View style={styles.rightContainer}>
						<Text style={styles.title}>{movie.title}</Text>
						<Text style={styles.year}>{movie.year}</Text>
					</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
    container: {
        flex:1,
		flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#eeeeee'
    },
	thumbnail:{
		width:100,
		height:80
	},
	rightContainer:{
		flex:1
	},
	title:{
		fontSize:20,
		marginBottom:8,
		textAlign:'center'
	},
	year:{
		textAlign:'center'
	}
});
