import React from 'react'
import { MenuItem } from './MenuItem';

export const Menu = (list: Array<any>, selected:string) =>  (
    list.map( el => {
        const {name} = el;
        return <MenuItem text={name} key={name} selected={selected} />
    })
)