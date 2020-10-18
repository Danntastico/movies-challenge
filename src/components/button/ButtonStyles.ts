import  styled from 'styled-components';

interface StyledButtonProps {
    customColor?:string;
    customHoverColor?: string;
    customTextColor?:string;
    customTextHoverColor?: string;
}

export const ButtonComp = styled.button<StyledButtonProps>`
    background-color: ${({customColor}) => customColor ? customColor: "yellow" };
    border: none;
    & > :hover {
        background-color: ${({customHoverColor}) => customHoverColor ? customHoverColor: "yellow" };
    }
`

