import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const CodeRenderingWrapper = styled.section`
    display: flex;
    height: 40vh;
    flex-basis: 100%;
`

export const CodeRendering = (props) => {
    const Code = styled.div`
        ${props.cssCode}
    `
    const runJsCode = (jsCode) => {
        try {
            //TODO: fix this unsafe code
            var fnInstructions = new Function(jsCode);

            return (fnInstructions());
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <CodeRenderingWrapper>
            {runJsCode(props.jsCode)}
            <Code dangerouslySetInnerHTML={{ __html: props.htmlCode }} />
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