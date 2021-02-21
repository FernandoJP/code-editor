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
        border: 1px solid #777;
        outline: none;
    }
`

const CodeBox = (props) => {
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
            props.onHTMLCodeChanged(code);
        }, 500);
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
        onHTMLCodeChanged: (htmlCode) => dispatch(actions.setHTML(htmlCode))
    }
}

export default connect(null, mapDispatchToProps)(CodeBox);