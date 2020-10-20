import  styled from 'styled-components';
import { Button } from 'react-bootstrap'

export const ButtonComp = styled(Button)`
    background-color: ${({customColor}) => customColor ? customColor : "transparent"};
    border: transparent;

    &:hover {
        background-color: ${({customHoverColor}) => customHoverColor ? customHoverColor : "transparent"};
    }

    @media screen and (max-width: 613px) {
        padding: 0 1px 0 1px;
    }
`

