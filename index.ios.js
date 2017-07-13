/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
var Dimensions = require('Dimensions');
import first from './src/firstview'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Navigator
} from 'react-native';


export default class rn_pro extends Component {
  constructor(props) {
        super(props);
        this.state = {
            name: 'tom'
        }
    }
  configureScene(route) {
    if (route.type == 'Bottom') {
      return Navigator.SceneConfigs.FloatFromBottom;
    }
    return Navigator.SceneConfigs.PushFromRight;
  }
  renderScene(route, navigator){ 
    return <route.component  {...route.params}  navigator={navigator}/>
  }
  render() {
    console.warn(this.state.name)
    return (
          <Navigator style={{flex:1}}  initialRoute={{component: first}} configureScene={this.configureScene}
        renderScene={this.renderScene}/>
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

AppRegistry.registerComponent('rn_pro', () => rn_pro);
