import React, { Component } from 'react';
var Dimensions = require('Dimensions');
import person from './person'
import notice from './notice'

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Navigator,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';


export default class first extends Component {
	constructor(props) {
        super(props);
        this.state = {
            name: null,
            opacity:0
        }
    }
  // configureScene(route, routeStack) {
  //   if (route.type == 'Bottom') {
  //     return Navigator.SceneConfigs.FloatFromBottom; // 底部弹出
  //   }
  //   return Navigator.SceneConfigs.PushFromRight; // 右侧弹出
  // },
  // renderScene(route, navigator) {
  //   return <route.component navigator={navigator}  {...route.passProps} />;
  // },
  goPerson = ()=> {
  	const me = this
  	const navigator = this.props.navigator
  	if(navigator){
  		var route = {
  			name:'person',
  			component:person
  		}
  		navigator.push(route)
  	}
  }
  press  (){

  }
  render() {
    return (
      <View style={styles.scroll}>
        <ScrollView >
          <View style={styles.container}>
            <Image
              style={styles.img}
              source={require('../static/imgs/file.png')}
            />

            <Text style={styles.instructions}>
              To get started, edit index.ios.js??????
            </Text>
            
          </View>
          
        </ScrollView>
        <View style={styles.footer}>
              <TouchableOpacity  style={styles.footeritem} onPress={this.goPerson.bind(this)}>
                <View   >
                    <Image style={styles.footerIcon} source={require('../static/imgs/_home.png')}/>
                    <Text>首页</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity  style={styles.footeritem} onPress={this.goPerson.bind(this)}>
              <View >
                  <Image style={styles.footerIcon} source={require('../static/imgs/blocks.png')}/>
                  <Text>板块</Text>
              </View>
              </TouchableOpacity>

              <TouchableHighlight style={styles.footeritem} onPress={this.press} activeOpacity={.9} >
                <View >
                    <Image style={styles.footerIcon} source={require('../static/imgs/notice.png')}/>
                    <Text>消息</Text>
                </View>
              </TouchableHighlight>
              <TouchableOpacity  style={styles.footeritem} onPress={this.goPerson.bind(this)}>
	              <View >
	                  <Image style={styles.footerIcon} source={require('../static/imgs/person.png')}/>
	                  <Text>个人</Text>
	              </View>
              </TouchableOpacity>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    backgroundColor: '#eee',
    padding:0,
    paddingTop:20,
  },
  scroll:{
  	width:Dimensions.get('window').width,
    position:'relative',
    height:Dimensions.get('window').height
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    color:'red'
  },
  img:{
    // alignSelf:'stretch'
    width:Dimensions.get('window').width,
    height:200
  },
  footer:{
    position:'absolute',
    bottom:0,
    flexDirection:'row',
    justifyContent:'space-around',
    marginTop:10,
    paddingBottom:5,
    paddingTop:5,
    backgroundColor:'#eee'
  },
  footeritem:{
    flexDirection:"column",
    alignItems:'center',
    flexGrow:1
  },
  footerIcon:{
    width:20,
    height:20,
    marginBottom:5
  }
});