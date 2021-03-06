import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import CodeFilesDownload from './CodeFilesDownload';
import { store, ThemeProviderWrapper } from '../../helpers/tests';

Enzyme.configure({ adapter: new Adapter() });

describe('<CodeFilesDownload />', () => {
    let wrapper, instance;

    beforeEach(() => {
        const shallowWithTheme = tree => shallow(tree, {
            wrappingComponent: ThemeProviderWrapper
        });

        wrapper = shallowWithTheme(<CodeFilesDownload store={store} />).dive().dive();
        instance = wrapper.instance();
    });

    it("should generate HTML code", () => {
        const htmlCodeMock = '<h1>Title</h1>';
        const generatedHtmlCode = instance.generateHtmlCode(htmlCodeMock).trim();

        expect(generatedHtmlCode).toBe(`
        <!DOCTYPE html>
        <html>
            <head>
            <title>Code generated by CodeEditor</title>
            <link rel="stylesheet" href="styles.css">
            </head>
            <body>
                ${htmlCodeMock}
                <script src="scripts.js"></script>
            </body>
        </html>
        `.trim());
    });

    it("should handle click of download button", () => {
        const link = {
            click: jest.fn()
        };
        jest.spyOn(instance, "downloadFile").mockImplementation(() => link);

        instance.downloadClickHandler();
        instance.forceUpdate();

        expect(instance.downloadFile).toHaveBeenCalledTimes(1);
    });

    it("should display download button", () => {
        const downloadButton = wrapper.find('[onClick]');
        expect(downloadButton.text()).toBeTruthy();
    });

});