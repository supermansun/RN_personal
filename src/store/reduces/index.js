import {combineReducers} from 'redux'
import common from './common'
import home from './home'
const reduces = combineReducers({
    common,
    home
})
export default reduces