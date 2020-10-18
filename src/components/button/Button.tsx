import React, { FunctionComponent } from 'react';
import { ButtonComp } from './ButtonStyles';
interface ButtonProps {
    onClick: () => void;
    textLabel: string;
    customColor?:string;
    customHoverColor?: string;
    customTextColor?:string;
    customTextHoverColor?: string;
}

export const Button: FunctionComponent<ButtonProps> = ({ 
        onClick, 
        textLabel,
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
                { textLabel }
            </ButtonComp>
        </>
    )
}
