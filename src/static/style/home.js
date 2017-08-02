import { StyleSheet } from 'react-native'
var Dimensions = require('Dimensions');

export default StyleSheet.create({
    test:{
        marginTop:50
    },
    container: {
        justifyContent: 'flex-start',
        backgroundColor: '#eee',
        padding: 0,
        paddingTop: 20,
    },
    scroll: {
        width: Dimensions.get('window').width,
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
        borderTopWidth:.5,
        borderTopColor:"#999",
        backgroundColor: '#eee'
    },
    footeritem: {
        flexDirection: "column",
        justifyContent:'center',
        alignItems: 'center',
        flexGrow: 1,
    },
    footText:{
        fontSize:12,
        color:"#666"
    },
    footCenter:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    footerIcon: {
        width: 16,
        height: 16,
        marginBottom: 5
    }
});
