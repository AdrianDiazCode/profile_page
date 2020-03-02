import change_language from '../actions/change_language'
import {CHANGE_LANGUAGE_TYPE} from '../actions/change_language'
import {CHANGE_DESCRIPTION_VISIBITY_TYPE} from '../actions/change_description_visibility'

const default_state = {
    language:'eng',
    is_description_visible:false,
}

function reducer(state = default_state, action){
    console.log('global reducer action type:',action.type);
    
    switch (action.type) {
        case CHANGE_LANGUAGE_TYPE:
            return Object.assign({}, state, {
                language: action.payload
            })
        case CHANGE_DESCRIPTION_VISIBITY_TYPE:
            return  Object.assign({}, state, {
                is_description_visible: action.payload
            })
        default:
            return state
    }
}

export default reducer;