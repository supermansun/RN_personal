import * as types from '../types'
export default function () {
    return (dispatch) => {
        console.log('invoke common action??????!!!!')
        dispatch(setRoute('notice'))
    }

}
function setRoute(route) {
    return {
        type: types.SETCURRENTROUTER,
        router: route
    }
}