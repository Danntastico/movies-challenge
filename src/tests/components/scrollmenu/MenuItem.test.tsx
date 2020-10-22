import React from 'react'
import { mount } from 'enzyme';
import { MenuItem } from 'components/scrollmenu/MenuItem'

describe('Unit tests on MenuItem', () => {
    const shall = mount(<MenuItem text="Test text" selected="Item 1" />)

    test('Should render correctly ', () => {
        expect(shall).toMatchSnapshot();
    });
    test('Should render text correctly', () => {
        const menuItemText = shall.find('div').text();

        expect(menuItemText).toEqual('Test text');
    });
});