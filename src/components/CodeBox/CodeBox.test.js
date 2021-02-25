import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import { CODE_TYPES } from '../../constants/codeTypes';
import CodeBox from './CodeBox';
import { ThemeProviderWrapper } from '../../helpers/tests';

Enzyme.configure({ adapter: new Adapter() });

describe('<CodeBox />', () => {
    let wrapper;

    beforeEach(() => {
        const mountWithTheme = tree => mount(tree, {
            wrappingComponent: ThemeProviderWrapper
        });

        wrapper = mountWithTheme(<CodeBox type={CODE_TYPES.HTML} />);
    });

    it('should change code input', () => {
        const htmlCode = '<h1>Title</h1>'
        wrapper.find('[onInput]').at(1).instance().value = htmlCode;
        expect(wrapper.find('[onInput]').at(1).instance().value).toBe(htmlCode);
    });

    it('should display box title', () => {
        expect(wrapper.find('h2').text().trim()).toBe(CODE_TYPES.HTML);

        wrapper.setProps({ type: CODE_TYPES.CSS });
        expect(wrapper.find('h2').text().trim()).toBe(CODE_TYPES.CSS);

        wrapper.setProps({ type: CODE_TYPES.JAVASCRIPT });
        expect(wrapper.find('h2').text().trim()).toBe(CODE_TYPES.JAVASCRIPT);
    });

});