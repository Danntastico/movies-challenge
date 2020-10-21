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
    font-family: 'Poppins', sans-serif;

    ::placeholder { 
        color: white;
        opacity: 1; 
        font-size: 19px;
    }

    :focus  {
        border-color: transparent;
        background-color: black;
        color: white;
    }
    
    @media screen and (max-width: 613px) {
        width: 65%;
        padding: 6px 0 6px 0;
        font-size: 15px;
        text-align: center;

        ::placeholder { 
        font-size: 15px;
        }
    }
`

export const BrandStyled = styled(NavbarBrand)`
    
`;

export const NavbarStyled = styled(Navbar)`
    background-color: black;
    border-bottom: .05em solid rgba(216,162,0,0.65);
    justify-content: space-between;

    input.yourclassname::placeholder { 
    color: white;
    opacity: 1; 

    :active  {
        
        border-color: transparent;
        background-color: black;
        color: white;
    }
    
}

    @media(min-width: 768px){ 
    }
`;

export const SearchIcon = styled.img`
    width: 35px;
    height: 35px;
    :active  {
        
        border-color: transparent;
        background-color: black;
        color: white;
        
    }
`

export const MainLogo = styled.img`
    width: 110px;
    height: 100%;
`