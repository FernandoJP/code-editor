import React from 'react';
import styled from 'styled-components';
import JSZip from 'jszip';
import FileSaver from 'file-saver';
import { connect } from 'react-redux';

const CodeFilesDownloadButton = styled.button`
    display: flex;
    height: 60vh;
`

const DownloadButton = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    margin: ${props => props.theme.spacers.small};
    padding: ${props => props.theme.spacers.small};
    background: ${props => props.theme.colors.primary};
    color: #fff;
`

const CodeFilesDownload = (props) => {

    function downloadFile(...files) {
        let zip = new JSZip();

        files.forEach(file => zip.file(file.name, file.content));

        zip.generateAsync({ type: "blob" }).then(function (content) {
            FileSaver.saveAs(content, "code.zip");
        });
    }

    const generateHtmlCode = (htmlCode) => {
        return `
        <!DOCTYPE html>
        <html>
            <head>
            <title>Code generated by CodeEditor</title>
            <link rel="stylesheet" href="styles.css">
            </head>
            <body>
                ${htmlCode}
                <script src="scripts.js"></script>
            </body>
        </html>
        `
    }

    const downloadClickHandler = () => {
        downloadFile(
            { name: 'index.html', content: generateHtmlCode(props.htmlCode) },
            { name: 'scripts.js', content: props.jsCode },
            { name: 'styles.css', content: props.cssCode }
        );
    }

    return (
        <>
            <CodeFilesDownloadButton>
                <DownloadButton onClick={() => downloadClickHandler()}>
                    Download files
                </DownloadButton>
            </CodeFilesDownloadButton>
        </>
    )
}

const mapStateToProps = state => {
    return {
        htmlCode: state.codeEditor.htmlCode,
        cssCode: state.codeEditor.cssCode,
        jsCode: state.codeEditor.jsCode,
    }
};


export default connect(mapStateToProps, null)(CodeFilesDownload);