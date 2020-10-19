import React, { FunctionComponent } from 'react'
import { MainLogo, SearchIcon, FormInline, FormControlStyled, BrandStyled, NavbarStyled } from './NavbarStyles';
import { Button } from 'components/button/Button';
export const Navbar: FunctionComponent = () => {
    return (
        <>
            <NavbarStyled >
                <BrandStyled >
                    <MainLogo src="img/logo-test.png" alt="main-logo" loading="lazy" />
                </BrandStyled>
                <FormInline className="form-inline">
                    <Button onClick={() => {}}>
                        <SearchIcon src='img/iconSearch.svg' alt="search" />
                    </Button>
                    <FormControlStyled className="form-control mr-sm-2" type="search" placeholder="Search Movies" aria-label="Search" />
                </FormInline>
            </NavbarStyled>
        </>
    )
}
