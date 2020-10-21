import React, { FunctionComponent } from 'react';
import { ColStyled, CardStyled, CardBody, CardTitle, CardRating, CardText, CardFooter } from './CardStyles';

interface CardProps {
    keyValue: string;
    rating: string;
    title: string;
}

export const Card: FunctionComponent<CardProps> = ({keyValue, rating, title, children}) => {
    return (
        <>
            <ColStyled sm={6} md={4} lg={3} className="align-items-stretch">
                <CardStyled>    
                    <CardBody >
                        <CardTitle> { keyValue } </CardTitle>
                        <CardRating> { rating } </CardRating>
                        <CardText> { title } </CardText>
                        <CardFooter>                                    
                            {children}
                        </CardFooter> 
                    </CardBody>
                </CardStyled>
            </ColStyled>
        </>
    )
}