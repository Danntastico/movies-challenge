import React, { FunctionComponent } from 'react';
import ScrollToTop from "react-scroll-to-top";
import { ButtonTop } from './topStyles';

export const TopButton: FunctionComponent = () => {
    return (
        <ButtonTop>
            <ScrollToTop smooth />
        </ButtonTop>
    );
}