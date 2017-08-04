import { StyleSheet } from 'react-native'
var Dimensions = require('Dimensions');

export default StyleSheet.create({
    test: {
        position:'absolute',
        bottom:280,
        backgroundColor: 'red',
        zIndex:100
    },
    container: {
        justifyContent: 'flex-start',
        backgroundColor: '#eee',
        padding: 0,
        paddingTop: 20,
    },
    banner:{
        // positon:'relative',
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').width*0.53,
    },
    bannerItem: {
        width: Dimensions.get('window').width,
        height:Dimensions.get('window').width*0.53,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    wrapper: {
        width: Dimensions.get('window').width,
        position: 'relative',
        height: Dimensions.get('window').height,
        backgroundColor:"#eee",
    },
    scroll:{
        marginBottom:40 
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
        borderTopWidth: .5,
        borderTopColor: "#e0e0e0",
        backgroundColor: '#f6f6f6'
    },
    footeritem: {
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
    },
    footText: {
        fontSize: 12,
        color: "#666"
    },
    footTextAct: {
        fontSize: 12,
        color: "#fb4747"
    },
    footCenter: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    footerIcon: {
        width: 16,
        height: 16,
        marginBottom: 5
    },
    outhot:{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft:10,
        paddingRight:10,
        backgroundColor:"#fff"
    },
    topsection:{
        height:70,
        flexDirection:"row",
        justifyContent:"space-around",
        borderBottomWidth:.5,
        borderBottomColor:'#eee',
        backgroundColor:"#fff",
        marginBottom:5
    }
});
