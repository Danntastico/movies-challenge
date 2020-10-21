import  styled from 'styled-components';
import { Button } from 'react-bootstrap'
interface StyledButtonProps {
    customColor?:string;
    customHoverColor?: string;
    customTextColor?:string;
    customTextHoverColor?: string;
}

export const ButtonComp = styled(Button)<StyledButtonProps>`
    background-color: ${({customColor}) => customColor ? customColor : "transparent"};
    border: transparent;

    :active  {
        
        border-color: transparent;
        background-color: black;
        color: white;
        
    }

    &:hover {
        background-color: ${({customHoverColor}) => customHoverColor ? customHoverColor : "transparent"};
    }

    @media screen and (max-width: 613px) {
        padding: 0 1px 0 1px;
    }
`

