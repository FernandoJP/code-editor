import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import CodeEditor from '../CodeEditor/CodeEditor';
import { store, ThemeProviderWrapper } from '../../helpers/tests';

Enzyme.configure({ adapter: new Adapter() });

describe('<CodeEditor />', () => {
    let wrapper;

    beforeEach(() => {
        const mountWithTheme = tree => mount(tree, {
            wrappingComponent: ThemeProviderWrapper
        });

        wrapper = mountWithTheme(<CodeEditor store={store} />);
    });

    it("should display main page title", () => {
        const pageTitle = wrapper.find('h1');
        expect(pageTitle.text()).toBe('Code Editor');
    });

    it("should display three code boxes", () => {
        const pageTitle = wrapper.find('CodeBox');
        expect(pageTitle.length).toBe(3);
    });

});