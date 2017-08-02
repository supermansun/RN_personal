import React, { Component } from 'react';
import {Text} from 'react-native'

export default class person extends React.Component{
	constructor(props) {
        super(props);
        this.state = {
            name: null
        }
    }
    render(){
    	return (
    			<Text>这里是个人中心mmmmm</Text>
    		)
    }
}