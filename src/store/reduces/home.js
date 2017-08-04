import * as type from '../types'
import * as initial_Data from '../data'
const initialstate = {
    banners         :   initial_Data.banner.data,
    hot_topic       :   initial_Data.hottopic.data,
    section_list    :   initial_Data.sections.data,
    topic_list      :   initial_Data.topiclist
}
export default function(state = initialstate,action){
    switch(action.type){
        case type.SETBANNERS:
            return Object.assign({},state,{
                banners : action.banners
            })
            break;
        default:
            return state
    }
}