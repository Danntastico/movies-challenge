import React from 'react'
import { Card } from 'components/card/Card';
import { mount } from 'enzyme';

import '@testing-library/jest-dom'
describe('Unit Testing to CARD component', () => {
    const shall = 
        mount(
            <Card 
                title="testTitle" 
                rating={1} 
                keyValue={1} 
                tmdbID={1} 
                > 
                category 
            </Card>)

    test('Should render correctly', () => {
        expect(shall).toMatchSnapshot();    
    });
    test('Should show title correctly', () => {
        const paragraphs = shall.find('p');
        expect(paragraphs.at(1).text().trim()).toBe('testTitle');
    });
});