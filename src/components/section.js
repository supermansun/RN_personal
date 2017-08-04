import React,{Component} from 'react';
import {View,Text,StyleSheet,Image}  from 'react-native'
var Dimensions = require('Dimensions');

export default class Hottopic extends Component {
    constructor(props){
        super(props)
    }
    render() {
        const data = this.props.data
        console.log(data)
        return (
            <View style={styles.item}>
                <Image style={styles.img} source={{uri:data.sectionIcon}}></Image>
                <Text style={styles.text}>{data.sectionName}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    item:{
        flexDirection:"column",
        justifyContent:'space-around',
        alignItems:'center'
    },
    img:{
        width:36,
        height:36,
        borderRadius:18
    },
    text:{
        fontSize:14,
        color:"#2b2b2b"
    }
})