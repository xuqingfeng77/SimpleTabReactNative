/**
 * Created by wangdi on 4/11/16.
 */
'use strict';

import React, {Component} from 'react';
import {Text, View, StyleSheet, PixelRatio, Platform, TouchableOpacity, Image, TextInput, BackAndroid} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ImageButton from '../component/ImageButtonWithText';
import Button from '../component/Button';
import px2dp from '../util/px2dp';
import Toast2Android from '../config/Toast2Android';
import theme from '../config/theme';
import NavigationBar from '../component/SimpleNavigationBar';
import PageComponent from './BackPageComponent';
var ToolbarAndroid = require('ToolbarAndroid');
export default class SignUpPage extends PageComponent {
    constructor(props){
        super(props);
        this.handleBack = this._handleBack.bind(this);
    }

    _signupCallback(){
        Toast2Android.show('点击了注册按钮', Toast2Android.SHORT);
        console.log("You tapped the button!");

    }
//    onActionSelected:function(position) {
//       this.setState({
//             actionText: 'Selected ' + toolbarActions[position].title,
//           });
//    },
    render(){
        return(

<View style={styles.view}>
  <ToolbarAndroid
          navIcon={require('../image/lib_titlebar_back_normal.png')}
//          logo={require('../image/ic_share_android.png')}
          title='注册'
          titleColor
          actions={toolbarActions}
          style={styles.toolbar}
//          onActionSelected={this.onActionSelected}
//          onIconClicked={()=>this.setState({actionText:'icon clicked'})}
          >
        </ToolbarAndroid>
              <View style={styles.editGroup}>
                  <View style={styles.editView1}>
                      <TextInput
                          style={styles.edit}
                          underlineColorAndroid="transparent"
                          placeholder="手机号"
                          placeholderTextColor="#c4c4c4"/>
                  </View>
                  <View style={{height: 1/PixelRatio.get(), backgroundColor:'#c4c4c4'}}/>
                  <View style={styles.editView2}>
                      <TextInput
                          style={styles.edit}
                          underlineColorAndroid="transparent"
                          placeholder="用户名"
                          placeholderTextColor="#c4c4c4"/>
                  </View>
                  <View style={{height: 1/PixelRatio.get(), backgroundColor:'#c4c4c4'}}/>
                  <View style={styles.editView3}>
                      <TextInput
                          style={styles.edit}
                          underlineColorAndroid="transparent"
                          placeholder="密码"
                          placeholderTextColor="#c4c4c4"/>
                  </View>
                  <View style={{marginTop: px2dp(15)}}>
                      <Button text="注册" onPress={this._signupCallback.bind(this)}/>
                  </View>
              </View>
</View>


        );
    }
}
var toolbarActions = [
  {title: 'Create', icon: require('../image/ic_share_design.png'), show: 'always'},
  {title: 'Settings', icon: require('../image/ic_share_freebie.png'), show: 'always'},
  {title: 'Filter'},
];
const styles = StyleSheet.create({
    toolbar: {
    backgroundColor: 'rgb(103, 172, 102)',
    height: 56,
    },
    view: {
        flex: 1,
        backgroundColor: 'rgb(208, 218, 227)'
    },
    actionBar:{
        marginTop: (Platform.OS === 'ios') ? px2dp(10) : 0,
    },
    editGroup:{
        padding: px2dp(20)
    },
    edit:{
        height: px2dp(40),
        fontSize: px2dp(13),
        backgroundColor: 'white',
        paddingLeft: px2dp(15),
        paddingRight: px2dp(15)
    },
    editView1:{
        height: px2dp(48),
        backgroundColor:'white',
        justifyContent: 'center',
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3

    },
    editView2:{
        height: px2dp(48),
        backgroundColor:'white',
        justifyContent: 'center'
    },
    editView3:{
        height: px2dp(48),
        backgroundColor:'white',
        justifyContent: 'center',
        borderBottomLeftRadius: 3,
        borderBottomRightRadius: 3
    },
});