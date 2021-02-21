import * as actionTypes from './actionTypes';

export const setHtml = (htmlCode) => {
    return {
        type: actionTypes.SET_HTML,
        htmlCode
    };
};

export const setCss = (cssCode) => {
    return {
        type: actionTypes.SET_CSS,
        cssCode
    };
};

export const setJs = (jsCode) => {
    return {
        type: actionTypes.SET_JS,
        jsCode
    };
};