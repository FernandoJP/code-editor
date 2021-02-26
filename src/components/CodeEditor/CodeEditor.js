import React from 'react';
import styled from 'styled-components';

import CodeBox from '../CodeBox/CodeBox';
import CodeRendering from '../CodeRendering/CodeRendering';
import CodeFilesDownload from '../CodeFilesDownload/CodeFilesDownload';
import { CODE_TYPES } from '../../constants/codeTypes';

const CodeEditorWrapper = styled.section`
    height: 60vh;
    
`

const CodeBoxWrapper = styled.section`
    display: flex;
    height: 100%;
    flex-wrap: wrap;
`

const MainHeading = styled.h1`
    padding-left: ${props => props.theme.spacers.medium};
`

const CodeEditor = () => {
    return (
        <CodeEditorWrapper role="main">
            <MainHeading>Code Editor</MainHeading>
            <CodeBoxWrapper>
                <CodeBox type={CODE_TYPES.HTML} />
                <CodeBox type={CODE_TYPES.CSS} />
                <CodeBox type={CODE_TYPES.JAVASCRIPT} />
                <CodeRendering />
            </CodeBoxWrapper>


            <CodeFilesDownload />
        </CodeEditorWrapper>
    )
}

export default CodeEditor;