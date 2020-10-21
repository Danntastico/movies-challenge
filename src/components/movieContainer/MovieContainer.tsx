import React, { FunctionComponent } from 'react'
import { RowStyled } from 'components/movieContainer/MovieContainerStyles';

interface MovieContainerProps{
    children: any;
}

export const MovieContainer: FunctionComponent = ({children}) => {
    return (
        <>
        <RowStyled>
            {children}
        </RowStyled>
        </>
    )
}
