import React, { FunctionComponent } from 'react';
import { RowStyled, ColStyled, CardStyled, CardBody, CardTitle, CardRating, CardText, CardFooter, CardParagraph } from './CardStyles';

interface CardProps {
    keyValue: string;
    rating: string;
    title: string;
}

export const Card: FunctionComponent<CardProps> = ({keyValue, rating, title}) => {
    return (
        <>
            <RowStyled >
                <ColStyled sm={6} md={4} lg={3} className="align-items-stretch">
                    <CardStyled>    
                        <CardBody >
                            <CardTitle> { keyValue } </CardTitle>
                            <CardRating> { rating } </CardRating>
                            <CardText> { title } </CardText>
                            <CardFooter>                                    
                                <CardParagraph> Comedy </CardParagraph>
                                <CardParagraph> Fantasy </CardParagraph>
                            </CardFooter> 
                        </CardBody>
                    </CardStyled>
                </ColStyled>
            </RowStyled >
        </>
    )
}