import reducer from './codeEditor';
import * as actionTypes from '../actions/actionTypes';

describe('codeEditor reducer', () => {
    const initialState = {
        htmlCode: '',
        cssCode: '',
        jsCode: ''
    }

    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });

    it('should store the HTML code', () => {
        const htmlCode = '<h1>Title</h1>';

        expect(reducer(
            initialState,
            {
                type: actionTypes.SET_HTML,
                htmlCode
            })).toEqual({
                ...initialState,
                htmlCode
            });
    });

    it('should store the CSS code', () => {
        const cssCode = 'h1 { font-size: 1rem }';

        expect(reducer(
            initialState,
            {
                type: actionTypes.SET_CSS,
                cssCode
            })).toEqual({
                ...initialState,
                cssCode
            });
    });

    it('should store the JavaScript code', () => {
        const jsCode = 'document.querySelector(\'h1\').style.h1 = \'1rem\'';
        expect(reducer(
            initialState,
            {
                type: actionTypes.SET_JS,
                jsCode
            })).toEqual({
                ...initialState,
                jsCode
            });
    });
});
