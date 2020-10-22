import React, { FunctionComponent } from 'react';
import { ButtonComp } from './ButtonStyles';
interface ButtonProps {
    onClick: () => void;
    children: any;
    type?: string,
    customColor?:string;
    customHoverColor?: string;
    customTextColor?:string;
    customTextHoverColor?: string;
}

export const Button: FunctionComponent<ButtonProps> = ({ 
        onClick, 
        children, type} ) => {

    return (
        <>
            <ButtonComp 
                onClick={onClick}
                type={type}
            >
                { children }
            </ButtonComp>
        </>
    )
}
