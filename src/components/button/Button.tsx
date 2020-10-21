import React, { FunctionComponent } from 'react';
import { ButtonComp } from './ButtonStyles';
interface ButtonProps {
    onClick: () => void;
    children: any;
    customColor?:string;
    customHoverColor?: string;
    customTextColor?:string;
    customTextHoverColor?: string;
}

export const Button = ({ 
        onClick, 
        children}: ButtonProps) => {

    return (
        <>
            <ButtonComp 
                onClick={onClick}
            >
                { children }
            </ButtonComp>
        </>
    )
}
