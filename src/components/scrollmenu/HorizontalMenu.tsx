import React, { FunctionComponent, useState } from 'react';

import { useHistory, withRouter } from "react-router-dom";
import ScrollMenu from 'react-horizontal-scrolling-menu'
import { scrollMenuItems } from 'utils/lists'
import { Menu } from './Menu';
import { Arrow } from './Arrow';

const HorizontalMenu: FunctionComponent = () => {
    const history = useHistory();
    const initialItemSelected = { selected: 'TOP 100'};
    const ArrowLeft = Arrow({text: '<', classNm: 'arrow-prev'})
    const ArrowRight = Arrow({text: '>', classNm: 'arrow-next'})

    const menuItems = Menu(scrollMenuItems, initialItemSelected.selected );
    const [select, setSelect] = useState(initialItemSelected)

    const handleOnSelect = (selectedItemKey: string ) => {
        setSelect({selected: selectedItemKey as string});
        const route = selectedItemKey.replace(/\s/g,'') as string;
        history.push(route === 'TOP100'? "/" : `/${route.toLowerCase()}`);
    }

    return (
        <>
            <ScrollMenu 
                data={menuItems}
                arrowLeft={ArrowLeft}
                arrowRight={ArrowRight}
                selected={select.selected}
                onSelect={handleOnSelect as () => void}
            />
        </>
    )
}

export default withRouter(HorizontalMenu)