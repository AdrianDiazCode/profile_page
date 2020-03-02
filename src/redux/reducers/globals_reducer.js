import change_language from '../actions/change_language'
import {CHANGE_LANGUAGE_TYPE} from '../actions/change_language'
import {CHANGE_DESCRIPTION_VISIBITY_TYPE} from '../actions/change_description_visibility'

const default_lang_dict = {
    "en-us":'eng',
    "en":"eng",
    "en-ca":"eng",
    "en-au":"eng",
    "en-gb":"eng",
    "de":"ger",
    "de-at":"ger",
    "de-de":"ger",
    "de-lu":"ger",
    "de-ch":"ger",
    "es":"spa",
    "es-ar":"spa",
    "es-cl":"spa",
    "es-co":"spa",
    "es-es":"spa",
    "es-mx":"spa",
}

const default_lang = default_lang_dict[(navigator.language).toLowerCase()];
if(typeof default_lang == 'undefined'){
    default_lang = 'eng';
}


const default_state = {
    language: default_lang,
    is_description_visible:false,
}

function reducer(state = default_state, action){
    console.log('global reducer action type:',action.type);
    console.log('global reducer state:',action.state);
    console.log('navigator_language:',navigator.language);

    
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