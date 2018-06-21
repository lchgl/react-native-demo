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

var REQUEST_URL = 'http://fileupload.aibuyi88.com/';

export default class account extends Component<Props> {
    static navigationOption = {
        title: '账户'
    };
    constructor(props) {
      super(props);
        
      this.state = {
        movies: null,
      };
    }

    render()
    {
        if (!this.state.movies) {
            return this.renderLoadingView();
        }
        var movie = this.state.movies[0];
        return this.renderMovie(movie);
    }

    fetchData()
    {
        fetch(REQUEST_URL, {
            method: 'GET'
        })
        .then((response) => response.json())
        .then((responseData) => {
			console.log(responseData.msg);
			alert(responseData.msg)
            this.setState({
                movies:responseData.movies,
            });
        })
        .catch((error) => {
              console.log(error)
        });
    }

    componentDidMount()
    {
        this.fetchData();
    }

    renderLoadingView()
    {
        return (
            <View style={styles.container}>
				<Text>
					正在加载数据......
				</Text>
            </View>
            );
    }

    renderMovie(movie)
    {
        return (
            <View style={styles.container}>
                <Image source={{uri:movie.posters.thumbnail}}
                style={styles.thumbnail} />
                <View style={styles.rightContainer}>
                    <Text style={styles.title}>{movie.title}</Text>
                    <Text style={styles.year}>{movie.year}</Text>
                </View>
            </View>
            );
    }
}

const styles = StyleSheet.create({
   container:{
        flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center',backgroundColor:'#F5FCFF'
    },
    thumbnail:{
        width:100,height:80
    },
    rightContainer:{
        flex:1
    },
    title:{
        fontSize:20,marginBottom:8,textAlign:'center'
    },
    year:{
        textAlign:'center'
    }
});
