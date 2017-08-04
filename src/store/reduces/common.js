import * as type from '../types'
const initialstate = {
    current_router:'home',
    section_name:'首页'
}
export default function (state=initialstate,action){
    switch(action.type){
        case type.SETCURRENTROUTER:
            return Object.assign({},state,{
                current_router:action.router[0],
                section_name:action.router[1]
            });
            break;
        default:
            return state
    }
}