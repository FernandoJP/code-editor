import * as actionTypes from '../actions/actionTypes';

const initialState = {
    htmlCode: '',
    cssCode: '',
    jsCode: ''
};

const setHTML = (state, action) => {
    console.log(state, action);
    return { ...state, htmlCode: '' };
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_HTML: return setHTML(state, action);
        default: return state;
    }
};

export default reducer;