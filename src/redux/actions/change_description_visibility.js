export const CHANGE_DESCRIPTION_VISIBITY_TYPE = 'change_description_visibility';

const change_description_visibility = function(boolval){
    console.log('changing description visibility to:',boolval);
    
    const type = CHANGE_DESCRIPTION_VISIBITY_TYPE;
    const payload = boolval;
    return {
        type,
        payload
    };
}

export default change_description_visibility;