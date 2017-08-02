import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet ,TouchableHighlight} from 'react-native'
var Dimensions = require('Dimensions');
import Header from '../components/header'
import styles from '../static/style/home'
import Footer from '../components/footer'
export default class home extends React.Component {
    constructor(props) {
        super(props)

    }
    goPerson = () => {
        const me = this
        const navigator = this.props.navigator
        if (navigator) {
            var route = {
                name: 'person',
                component: person
            }
            navigator.push(route)
        }
    }
    render() {
        console.log('this is home page rendering:',this.props)
        // console.log(this.props.current_router)

        return (
            <View style={styles.scroll}>
                <Header title='首页'></Header>
                <Text style={styles.test}>哈哈哈这是首页 {this.props.current_router}</Text>
                <Footer {...this.props}></Footer>
            </View>
        )
    }
}

