export const CHANGE_LANGUAGE_TYPE = 'change_language';

const change_language = (lang)=>{
    const type = CHANGE_LANGUAGE_TYPE;
    const payload = lang;
    return {
        type,
        payload
    }
}

export default change_language;