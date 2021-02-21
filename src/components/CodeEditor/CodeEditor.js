import React from 'react';
import styled from 'styled-components';

import CodeBox from '../CodeBox/CodeBox';
import CodeRendering from '../CodeRendering/CodeRendering';
import { CODE_TYPES } from '../../constants/codeTypes';

const CodeEditorWrapper = styled.section`
    display: flex;
    height: 60vh;
`

const CodeEditor = () => {
    return (
        <>
            <CodeEditorWrapper>
                <CodeBox type={CODE_TYPES.HTML} />
                <CodeBox type={CODE_TYPES.CSS} />
                <CodeBox type={CODE_TYPES.JAVASCRIPT} />
            </CodeEditorWrapper>
            <CodeRendering />
        </>
    )
}

export default CodeEditor;