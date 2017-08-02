import * as type from '../types'
const initialstate = {
    current_router:'home'
}
export default function (state=initialstate,action){
    switch(action.type){
        case type.SETCURRENTROUTER:
            return Object.assign({},state,{
                current_router:action.router
            });
            break;
        default:
            return state
    }
}