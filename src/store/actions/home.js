import * as types from '../types'

export function getBanners(){
    return (dispatch)=>{
        console.log('fetching banner data !!!!!!!!!!!!!!!!1')
    }
}
function bannerAction(data){
    return {
        type:types.SETBANNERS,
        banners:data
    }
}