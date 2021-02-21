import * as actionTypes from '../actions/actionTypes';

const initialState = {
    htmlCode: '',
    cssCode: '',
    jsCode: ''
};

const setHtml = (state, action) => {
    return { ...state, htmlCode: action.htmlCode };
};

const setCss = (state, action) => {
    return { ...state, cssCode: action.cssCode };
};

const setJs = (state, action) => {
    return { ...state, jsCode: action.jsCode };
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_HTML: return setHtml(state, action);
        case actionTypes.SET_CSS: return setCss(state, action);
        case actionTypes.SET_JS: return setJs(state, action);
        default: return state;
    }
};

export default reducer;