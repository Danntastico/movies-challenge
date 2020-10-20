import React, { FunctionComponent } from 'react';
import { RowStyled, ColStyled, CardStyled, CardBody, CardTitle, CardRating, CardText, CardFooter, CardParagraph } from './CardStyles';

export const Cards: FunctionComponent = () => {
    return (
        <>
             <div id="contenedorMovies">
                <RowStyled >
                    <ColStyled sm={6} md={4} lg={3} className="align-items-stretch">
                        <CardStyled>    
                            <CardBody >
                                <CardTitle> 1 </CardTitle>
                                <CardRating> 6.7 </CardRating>
                                <CardText> Las crónicas de narnia: la travesía del viajero del alba </CardText>
                                <CardFooter>                                    
                                    <CardParagraph> Comedy </CardParagraph>
                                    <CardParagraph> Fantasy </CardParagraph>
                                </CardFooter> 
                            </CardBody>
                        </CardStyled>
                    </ColStyled>

                    <ColStyled sm={6} md={4} lg={3} className="align-items-stretch">
                        <CardStyled>    
                            <CardBody >
                                <CardTitle> 1 </CardTitle>
                                <CardRating> 6.7 </CardRating>
                                <CardText> Las crónicas de narnia: la travesía del viajero del alba </CardText>
                                <CardFooter>                                    
                                    <CardParagraph> Comedy </CardParagraph>
                                    <CardParagraph> Fantasy </CardParagraph>
                                </CardFooter> 
                            </CardBody>
                        </CardStyled>
                    </ColStyled>

                    <ColStyled sm={6} md={4} lg={3} className="align-items-stretch">
                        <CardStyled>    
                            <CardBody >
                                <CardTitle> 1 </CardTitle>
                                <CardRating> 6.7 </CardRating>
                                <CardText> Las crónicas de narnia: la travesía del viajero del alba </CardText>
                                <CardFooter>                                    
                                    <CardParagraph> Comedy </CardParagraph>
                                    <CardParagraph> Fantasy </CardParagraph>
                                </CardFooter> 
                            </CardBody>
                        </CardStyled>
                    </ColStyled>

                    <ColStyled sm={6} md={4} lg={3} className="align-items-stretch">
                        <CardStyled>    
                            <CardBody >
                                <CardTitle> 1 </CardTitle>
                                <CardRating> 6.7 </CardRating>
                                <CardText> Las crónicas de narnia: la travesía del viajero del alba </CardText>
                                <CardFooter>                                    
                                    <CardParagraph> Comedy </CardParagraph>
                                    <CardParagraph> Fantasy </CardParagraph>
                                </CardFooter> 
                            </CardBody>
                        </CardStyled>
                    </ColStyled>
                </RowStyled >
            </div>
        </>
    )
}