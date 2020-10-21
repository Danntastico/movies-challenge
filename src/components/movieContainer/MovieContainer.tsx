import React, { FunctionComponent } from 'react'

interface MovieContainerProps{
    children: any;
}

export const MovieContainer: FunctionComponent = ({children}) => {
    return (
        <>
            {children}
        </>
    )
}
