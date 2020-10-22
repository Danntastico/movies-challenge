import React from 'react'
import styled from 'styled-components'

const ContainerStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const Title = styled.div`
    text-align: center;
    font-size: 2em;
    color: white;
`
const SubTitle = styled.div`
    text-align: center;
    font-size: 1em;
    color: yellow;
`

export const NotFound = () => {
    return (
        <ContainerStyled>
            <Title> 
                404
            </Title>
            <SubTitle>NOT FOUND!</SubTitle>
        </ContainerStyled>
    )
}
