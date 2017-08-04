import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet ,TouchableHighlight} from 'react-native'

import styles from '../static/style/home'
export default class extends Component {
    constructor(props, context) {
        super(props, context);
        const {routerSet} = this.props        
        this.setRoute = routerSet.bind(this)
        
    }
    
    render() {
        const {actions,current_router} = this.props        
        
        return (
            <View style={styles.footer}>
                <TouchableOpacity style={styles.footeritem} onPress={()=>{this.setRoute(['home','首页']);console.log('onpress')}} >
                    <View style={styles.footCenter}>
                        <Image style={styles.footerIcon} source={current_router=='home'?require('../static/imgs/_home.png') : require('../static/imgs/home.png')} />
                        <Text style={current_router=='home'?styles.footTextAct:styles.footText}>首页</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footeritem} onPress={()=>{this.setRoute(['blocks','板块'])}} >
                    <View style={styles.footCenter}>
                        <Image style={styles.footerIcon} source={current_router=='blocks'?require('../static/imgs/_blocks.png') : require('../static/imgs/blocks.png')} />
                        <Text style={current_router=='blocks'?styles.footTextAct:styles.footText}>板块</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footeritem}  onPress={()=>{this.setRoute(['notice','消息'])}} >
                    <View style={styles.footCenter}>
                        <Image style={styles.footerIcon} source={current_router=='notice'?require('../static/imgs/_notice.png') : require('../static/imgs/notice.png')} />
                        <Text style={current_router=='notice'?styles.footTextAct:styles.footText}>消息</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footeritem}  onPress={()=>{this.setRoute(['personal','个人'])}}>
                    <View style={styles.footCenter}>
                        <Image style={styles.footerIcon} source={current_router=='personal'?require('../static/imgs/_person.png') : require('../static/imgs/person.png')} />
                        <Text style={current_router=='personal'?styles.footTextAct:styles.footText}>个人</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}