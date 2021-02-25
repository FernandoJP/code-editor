import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { CODE_TYPES } from '../../constants/codeTypes';
import * as actions from '../../store/actions/actions';

const CodeBoxWrapper = styled.div`
    background-color: ${props => props.theme.colors.darkBg};
    width: 100%;
    height: 100%;
    color: ${props => props.theme.colors.secondary};
    border: 1rem solid ${props => props.theme.colors.darkBgAccent};
    border-top: none;
`

const CodeBoxLabel = styled.h2`
    display: inline-block;
    color: #fff;
    width: 100%;
    padding: ${props => props.theme.spacers.small};
    font-size: 1.1rem;
    font-weight: 400;
`

const CodeInput = styled.div.attrs(props => ({
    contentEditable: 'true'
}))`
    width: 100%;
    height: calc(100% - ${props => props.theme.spacers.small} - 2rem);
    padding: ${props => props.theme.spacers.small};
    overflow: auto;

    &:focus {
        outline: 1px solid #777;
    }
`

export const CodeBox = (props) => {
    const inputEl = useRef(null);
    const { type } = props;
    let timeout = 0;

    useEffect(() => {
        if (type === CODE_TYPES.HTML)
            inputEl.current.focus();
    }, [type]);

    const codeChangeHandler = (e) => {
        const code = e.currentTarget.textContent;

        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(() => {
            switch (type) {
                case CODE_TYPES.HTML:
                    props.onHtmlCodeChanged(code);
                    break;
                case CODE_TYPES.CSS:
                    props.onCssCodeChanged(code);
                    break;
                case CODE_TYPES.JAVASCRIPT:
                    props.onJsCodeChanged(code);
                    break;
                default:
                    break;
            }
        }, 500);

        return '123';
    }

    return (
        <CodeBoxWrapper>
            <CodeBoxLabel> {props.type} </CodeBoxLabel>
            <CodeInput onInput={codeChangeHandler} ref={inputEl} />
        </CodeBoxWrapper>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        onHtmlCodeChanged: (htmlCode) => dispatch(actions.setHtml(htmlCode)),
        onCssCodeChanged: (cssCode) => dispatch(actions.setCss(cssCode)),
        onJsCodeChanged: (jsCode) => dispatch(actions.setJs(jsCode))
    }
}

export default connect(null, mapDispatchToProps)(CodeBox);