import React from 'react';
import { mount } from 'enzyme';
import {Button} from '../../../components/button/Button';

import '@testing-library/jest-dom';

describe('Unit test on <Button />', () => {
    const onCLickButtonHandler = jest.fn();
    let wrapper = mount(<Button onClick={onCLickButtonHandler} children="Test Btn" />)

    test('should Render correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })
    test('Simulate onClick', () => {
        wrapper.find('button').simulate('click')
        expect(onCLickButtonHandler.mock.calls.length).toEqual(1);
    });
})
