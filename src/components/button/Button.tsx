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

export const Button: FunctionComponent<ButtonProps> = ({ 
        onClick, 
        children,
        customColor, 
        customHoverColor, 
        customTextColor, 
        customTextHoverColor }) => {
    return (
        <>
            <ButtonComp 
                onClick={onClick} 
                customColor={customColor} 
                customHoverColor={customHoverColor} 
                customTextColor={customTextColor}
                customTextHoverColor={customTextHoverColor}
            >
                { children }
            </ButtonComp>
        </>
    )
}
