import React, { useState } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu'
import { scrollMenuItems } from 'utils/lists'
import { Menu } from './Menu';
import { Arrow } from './Arrow';

export const HorizontalMenu = () => {
    const initialItemSelected = { selected: 'TOP 100'};
    const ArrowLeft = Arrow({text: '<', classNm: 'arrow-prev'})
    const ArrowRight = Arrow({text: '>', classNm: 'arrow-next'})

    const menuItems = Menu(scrollMenuItems, initialItemSelected.selected );
    const [select, setSelect] = useState(initialItemSelected)

    const handleOnSelect = (selectedItemKey: string | number | null ) => {
        setSelect({selected: selectedItemKey as string})
    }

    return (
        <>
            <ScrollMenu 
                data={menuItems}
                arrowLeft={ArrowLeft}
                arrowRight={ArrowRight}
                selected={select.selected}
                onSelect={handleOnSelect}
            />
        </>
    )
}
