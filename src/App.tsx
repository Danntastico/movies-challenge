import React, { FunctionComponent } from 'react'
import { Navbar } from 'components/navbar/Navbar';
import { GlobalStyle } from './styles/GlobalStyles';

export const App: FunctionComponent = () => {
    return (
        <>
            <GlobalStyle/>
            <Navbar />
        </>
    )
}
