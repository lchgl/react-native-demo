/**
 * Created by Administrator on 2018/6/5 0005.
 */
import {
    createStackNavigator,
    createDrawerNavigator
} from 'react-navigation';

import home from '../home/home';
import index from './index';


const RootStack = createStackNavigator(
    {
        Index: index,
        Home:home
    },
    {
        initialRouteName: 'Index'
    },
    {
        navigationOptions:{
            header:null
        }
    }
);

export default RootStack;