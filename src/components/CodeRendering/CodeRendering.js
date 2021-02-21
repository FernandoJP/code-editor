import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const CodeRenderingWrapper = styled.section`
    display: flex;
    height: 40vh;
`

const CodeRendering = (props) => {
    return (
        <CodeRenderingWrapper>
        </CodeRenderingWrapper>
    )
}

const mapStateToProps = state => {
    return {
        htmlCode: state.codeEditor.htmlCode,
        cssCode: state.codeEditor.cssCode,
        jsCode: state.codeEditor.jsCode,
    }
};


export default connect(mapStateToProps, null)(CodeRendering);