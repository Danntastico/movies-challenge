import React, { FunctionComponent } from 'react'
import { GlobalStyle } from './styles/GlobalStyles';
import { AppRouter } from 'router/AppRouter';

export const App: FunctionComponent = () => {
    return (
        <>
            <GlobalStyle />
            <AppRouter  />
        </>
    )
}
