import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import { CodeRendering } from './CodeRendering';
import { ThemeProviderWrapper } from '../../helpers/tests';

Enzyme.configure({ adapter: new Adapter() });

describe('<CodeRendering />', () => {
    let wrapper;
    const htmlCode = '<h1>Title</h1>';

    beforeEach(() => {
        const mountWithTheme = tree => mount(tree, {
            wrappingComponent: ThemeProviderWrapper
        });

        wrapper = mountWithTheme(<CodeRendering htmlCode={htmlCode} />);
    });

    it('should display HTML code', () => {
        expect(wrapper.find('[dangerouslySetInnerHTML]').at(0).html()).toContain(htmlCode);
    });

});