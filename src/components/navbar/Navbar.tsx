import React, { FunctionComponent } from 'react'
import { MainLogo, SearchIcon, FormInline, FormControlStyled, BrandStyled, NavbarStyled } from './NavbarStyles';
import { Button } from 'components/button/Button';
import { useHistory, Link, withRouter } from "react-router-dom";
import { useInput } from 'hooks/useInput';

const Navbar: FunctionComponent = () => {
    const history = useHistory();
    const [inputState, handleInputChange] = useInput({
        searchInput: ''
    });

    const onSubmit = (e:any) => {
        e.preventDefault()
        history.push('/search', inputState.searchInput )
    }
    const handleClick = () => {
        history.push('/search', inputState.searchInput )
    }
    
    const handleCLickOnLogo = () => {
        history.push('/');   
    }

    return (
        <>
            <NavbarStyled >
                <BrandStyled >
                    <Link to="/Top100">
                        <MainLogo src="img/logo-test.png" alt="main-logo" loading="lazy"  onClick={handleCLickOnLogo}/>
                    </Link>
                </BrandStyled>
                <FormInline className="form-inline" onSubmit={onSubmit}>
                    <Button onClick={handleClick} >
                        <SearchIcon src='img/iconSearch.svg' alt="search" />
                    </Button>
                    <FormControlStyled 
                        name="searchInput" 
                        value={inputState.searchInput} 
                        className="form-control mr-sm-2" 
                        type="search" 
                        placeholder="Search Movies" 
                        aria-label="Search" 
                        onChange={handleInputChange}
                    />
                </FormInline>
            </NavbarStyled>
        </>
    )
}

export default withRouter(Navbar)