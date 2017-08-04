import * as types from '../types'
export  function routerSet (route) {
    return (dispatch) => {
        console.log('invoke common action??????!!!!')
        dispatch(setRoute(route))
    }

}
function setRoute(route) {
    return {
        type: types.SETCURRENTROUTER,
        router: route
    }
}