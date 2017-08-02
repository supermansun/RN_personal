import React,{Component} from 'react';
import {View,Text,StyleSheet}  from 'react-native'
var Dimensions = require('Dimensions');

export default class header extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <View style={styles.header}>
                <Text style={styles.text}>首页</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    header:{
        width:Dimensions.get('window').width,
        justifyContent:'center',  
        alignItems:'center',      
        height:30,        
        marginTop:20,
        backgroundColor:'#eee'
    },
    text:{
        fontSize:16
    }
})