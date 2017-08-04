import React, { Component } from 'react';
var Dimensions = require('Dimensions');
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import first from './pages/firstview'
import home from './pages/home'
import actionCreator from './store/actions/index'
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    Navigator
} from 'react-native';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'jim'
        }
    }
    configureScene(route) {
        if (route.type == 'Bottom') {
            return Navigator.SceneConfigs.FloatFromBottom;
        }
        return Navigator.SceneConfigs.PushFromRight;
    }
    renderScene(route, navigator) {
        console.log('render :::::',this.props)
        return <route.component {...this.props}  {...route.params}   navigator={navigator} />
    }
    render() {
        return (
            <Navigator style={{ flex: 1 }} initialRoute={{ component: home }} configureScene={this.configureScene}
                renderScene={this.renderScene.bind(this)} />
        );
    }
}

const mapStateToProps = (state) => {
    const {common,home} = state;
    console.log('mapDispatchToProps:',common)
    
    return {
        ...common,
        ...home
    }
}
const mapDispatchToProps = (dispatch) => {
    const actions = bindActionCreators(actionCreator, dispatch)
    
    return {
        ...actions
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Index)


const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        backgroundColor: '#eee',
        padding: 0,
        paddingTop: 20,
    },
    scroll: {
        position: 'relative',
        height: Dimensions.get('window').height
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
        color: 'red'
    },
    img: {
        // alignSelf:'stretch'
        width: Dimensions.get('window').width,
        height: 200
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
        paddingBottom: 5,
        paddingTop: 5,
        backgroundColor: '#eee'
    },
    footeritem: {
        flexDirection: "column",
        alignItems: 'center',
        flexGrow: 1
    },
    footerIcon: {
        width: 20,
        height: 20,
        marginBottom: 5
    }
});