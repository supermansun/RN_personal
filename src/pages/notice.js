import React, { Component } from 'react';
import {Text} from 'react-native'

export default class notice extends React.Component{
	constructor(props) {
        super(props);
        this.state = {
            name: null
        }
    }
    render(){
    	return (
    			<Text style={styles.text}>这里是消息中心</Text>
    		)
    }

}
const styles = {
	text:{
		marginTop:50,
		fontSize:30,
		color:'red'
	}
}