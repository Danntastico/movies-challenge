import React, { FunctionComponent } from 'react'

interface MenuItemProps {
    text: string;
    selected: string;
}

export const MenuItem: FunctionComponent<MenuItemProps> = ({text, selected}) => {
    return (
        <div className={`menu-item ${selected ? 'active' : ''}`}>
            {text}
        </div>
    )
}
