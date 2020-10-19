import {  Form, NavbarBrand, Navbar, FormControl } from 'react-bootstrap';
import styled from 'styled-components'

export const FormInline = styled(Form)`
    width: auto;
`

export const FormControlStyled = styled(FormControl)`
    background-color: transparent;
    border: none;
    border-bottom: 1.5px solid #d8a200;
    border-radius: 0;
    color: #FFFFFF;

    @media screen and (max-width: 613px) {
        width: 65%;
        padding: 6px 0 6px 0;
        font-size: 15px;
        text-align: center;
    }
`

export const BrandStyled = styled(NavbarBrand)`

`;

export const NavbarStyled = styled(Navbar)`
    background-color: #111111;
    border-bottom: .05em solid rgba(216,162,0,0.65);
    justify-content: space-between;

    @media(min-width: 768px){ 
    }
`;

export const SearchIcon = styled.img`
    width: 35px;
    height: 35px;
`

export const MainLogo = styled.img`
    width: 110px;
    height: 100%;
`