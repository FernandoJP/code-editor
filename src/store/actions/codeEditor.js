import * as actionTypes from './actionTypes';

export const setHTML = (htmlCode) => {
    return {
        type: actionTypes.SET_HTML,
        htmlCode
    };
};