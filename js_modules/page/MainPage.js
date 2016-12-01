/**
 * Created by wangdi on 4/11/16.
 */
'use strict';

import React, {Component} from 'react';
import {Text, View, StyleSheet, PixelRatio, Platform, TouchableOpacity, Image, TextInput, BackAndroid,Navigator} from 'react-native';
import px2dp from '../util/px2dp';
import TabBar from '../component/TabBar';

export default class MainPage extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        BackAndroid.addEventListener('hardwareBackPress',function(){
         BackAndroid.exitApp(0);
                    return true;

         });
    }


    render(){
        return(
            <View style={{flex: 1, justifyContent: 'flex-end'}}>
                           <TabBar navigator={this.props.navigator}/>
                       </View>
            );
    }
}

const styles = StyleSheet.create({

});