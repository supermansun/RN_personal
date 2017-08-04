import React,{Component} from 'react';
import {View,Text,StyleSheet,Image}  from 'react-native'
var Dimensions = require('Dimensions');

export default class Hottopic extends Component {
    constructor(props){
        super(props)
    }
    render() {
        const data = this.props.data
        return (
            <View style={styles.hotItem}>
                <View style={styles.left}>
                    <View style={styles.title}>
                        <View style={styles.intitle}>
                            <Text style={styles.hotText} numberOfLines={2} ellipsizeMode='tail'>
                                <View style={styles.tag}>
                                    <Text style={styles.tagText}>TOP1</Text>
                                </View>
                                {data.title}
                            </Text>
                        </View>
                        <View>
                            <View style={styles.info}>
                                <Text style={styles.view}>浏览量{data.viewCount}</Text>
                                <Text style={styles.author}>小王老师</Text>
                            </View>
                        </View>
                        
                    </View>
                </View>
                <Image style={styles.img} source={{uri:data.pictureList[0]}}></Image>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    hotItem:{
        height:80,
        paddingTop:10,
        paddingBottom:10,
        flexDirection:"row",
        justifyContent:'space-between',
        alignItems:'stretch',
        borderBottomWidth:.5,
        borderBottomColor:"#d9d9d9"
    },
    hotText:{
        fontSize:14,
        lineHeight:22
    },
    left:{
        flex:2,
        paddingRight:15
    },
    info:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    title:{
        height:60,
        flexDirection:"column",
        justifyContent:"space-between",
    },
    intitle:{
        flex:2
    },
    view:{
        fontSize:10,
        color:"#b2b2b2"
    },
    author:{
        fontSize:10,
        color:"#b2b2b2"        
    },
    img:{
        flex:1,
        height:60
    },
    tag:{
        position:"absolute",
        height:14,
        width:45,
        marginRight:5,                
        borderRadius:2,
        overflow:'hidden',
        backgroundColor:'#fb4747',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        top:25
    },
    tagText:{
        width:45,
        textAlign:"center",        
        fontSize:13,
        color:"#fff"
    }
})