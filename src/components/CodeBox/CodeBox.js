import React from 'react';
import styled from 'styled-components';

import { CODE_TYPES } from '../../constants/codeTypes';


const CodeBoxWrapper = styled.div`
    background-color: ${props => props.theme.colors.darkBg};
    width: 100%;
    height: 100%;
    color: ${props => props.theme.colors.secondary};
    border: 1rem solid ${props => props.theme.colors.darkBgAccent};
    border-top: none;
`

const CodeBoxLabel = styled.span`
    display: inline-block;
    color: #fff;
    width: 100%;
    padding: ${props => props.theme.spacers.small};
`

const CodeInput = styled.div.attrs(props => ({
    contentEditable: 'true',
    autofocus: props.type === CODE_TYPES[0] ? 'true' : 'false'
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
    return (
        <CodeBoxWrapper>
            <CodeBoxLabel> {props.type} </CodeBoxLabel>
            <CodeInput />
        </CodeBoxWrapper>
    )
}

export default CodeBox;