import React from 'react';
import { mount } from 'enzyme';
import { Arrow } from 'components/scrollmenu/Arrow';
import '@testing-library/jest-dom';

describe('Unit tests For Arrow ', () => {
    const shallow = mount(<Arrow text="test" classNm="blabla"/>)

    test('Should render correctly', () => {
        expect(shallow).toMatchSnapshot();
    });

    test('Should render text prop correctly',  () => {
        expect(shallow.find('div').text()).toEqual('test');
    })
});