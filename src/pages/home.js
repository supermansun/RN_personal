import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet, TouchableHighlight, ScrollView } from 'react-native'
var Dimensions = require('Dimensions');
var Carousel = require('react-native-carousel');

import Header from '../components/header'
import styles from '../static/style/home'
import Footer from '../components/footer'
import Hottopic from '../components/hottopic'
import Section from '../components/section'
export default class home extends React.Component {
    constructor(props) {
        super(props)
        this.renderBanners = this.renderBanners.bind(this)
        this.renderHottopic = this.renderHottopic.bind(this)
        this.renderSection = this.renderSection.bind(this)
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
    renderBanners() {
        const {banners} =  this.props
        return  banners.map(item=>{
            let picurl = 'https:'+item.picture
            return (
                <View style={styles.bannerItem} key={item.infoId}>
                    <Image style={styles.banner} source={{ uri: picurl }}></Image>
                </View>
            )
        })
    }
    renderHottopic(){
        const {hot_topic} = this.props
        let hot = hot_topic.slice(0,3)
        return hot.map(item=>{
            return (
                <Hottopic data={item}  key={item.id}/>
            )
        })
    }
    renderSection(){
        const {section_list } = this.props
        let list = section_list.slice(0,4)
        return list.map(item=>{
            return (
                <Section data={item} key={item.sectionId}/>
            )
        })
    }
    render() {
        console.log('this is home page rendering:', this.props)
        // console.log(this.props.current_router)
        const {banners} = this.props
        return (
            <View style={styles.wrapper}>
                <ScrollView style={styles.scroll}>
                    <Header {...this.props}></Header>
                    <View height={Dimensions.get('window').width * 0.53}>
                        <Carousel hideIndicators={true} indicatorSize={15} delay={1500} indicatorSpace={10}>
                            {
                                this.renderBanners()
                            }
                        </Carousel>
                    </View>
                    <View style={styles.topsection}>
                        {
                            this.renderSection()
                        }
                    </View>
                    <View style={styles.outhot}>
                        {
                            this.renderHottopic()
                        }
                        {/*<Hottopic></Hottopic>*/}
                    </View>
                    {/*<Text >哈哈哈这是{this.props.banners[2].title} {this.props.current_router}</Text>
                    <Text >哈哈哈这是{this.props.section_name} {this.props.current_router}</Text>*/}
                </ScrollView>
                <Footer {...this.props}></Footer>
            </View>
        )
    }

}

