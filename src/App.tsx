import React, { FunctionComponent } from 'react'
import { Navbar } from 'components/navbar/Navbar';
import { GlobalStyle } from './styles/GlobalStyles';
import { AppRouter } from 'router/AppRouter';
import { HorizontalMenu } from 'components/scrollmenu/HorizontalMenu';

export const App: FunctionComponent = () => {
    
    return (
        <>
            <GlobalStyle />
            <Navbar />
            <HorizontalMenu/>
            <AppRouter  />
        </>
    )
}
