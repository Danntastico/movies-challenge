import React, { FunctionComponent } from 'react';
import { ColStyled, CardStyled, CardBody, CardTitle, CardRating, CardText, CardFooter, CardParagraph, CardHover} from './CardStyles';

interface CardProps {
    keyValue: string;
    rating: string;
    title: string;
    description: string;
}

export const Card: FunctionComponent<CardProps> = ({keyValue, rating, title, children, description}) => {
    return (
        <>
            <ColStyled sm={6} md={4} lg={3}>
                <CardStyled>    
                    <CardBody >
                        <CardTitle> { keyValue } </CardTitle>
                        <CardHover> {description} </CardHover>
                        <CardRating> { rating } </CardRating>
                        <CardText> { title } </CardText>
                        <CardFooter>                                    
                            <CardParagraph>asdad</CardParagraph>
                            <CardParagraph>asdad</CardParagraph>
                        </CardFooter>
                    </CardBody>
                </CardStyled>
            </ColStyled>
        </>
    )
}