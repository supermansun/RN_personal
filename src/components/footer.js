import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet ,TouchableHighlight} from 'react-native'

import styles from '../static/style/home'
export default class extends Component {
    constructor(props, context) {
        super(props, context);
    }
    
    render() {
        const {actions,current_router} = this.props
        console.log("setRoute:",actions.common)
        return (
            <View style={styles.footer}>
                <TouchableOpacity style={styles.footeritem} onPress={actions.common.bind(this)} >
                    <View style={styles.footCenter}   >
                        <Image style={styles.footerIcon} source={require('../static/imgs/_home.png')} />
                        <Text style={styles.footText}>首页{current_router}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footeritem} >
                    <View style={styles.footCenter}>
                        <Image style={styles.footerIcon} source={require('../static/imgs/blocks.png')} />
                        <Text style={styles.footText}>板块</Text>
                    </View>
                </TouchableOpacity>

                <TouchableHighlight style={styles.footeritem}  activeOpacity={.9} >
                    <View style={styles.footCenter}>
                        <Image style={styles.footerIcon} source={require('../static/imgs/notice.png')} />
                        <Text style={styles.footText}>消息</Text>
                    </View>
                </TouchableHighlight>
                <TouchableOpacity style={styles.footeritem} >
                    <View style={styles.footCenter}>
                        <Image style={styles.footerIcon} source={require('../static/imgs/person.png')} />
                        <Text style={styles.footText}>个人</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}