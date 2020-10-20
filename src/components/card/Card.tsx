import React, { FunctionComponent } from 'react';
import { RowStyled, ColStyled, CardStyled, CardBody, CardTitle, CardText, CardFooter } from './CardStyles';

export const Cards: FunctionComponent = () => {
    return (
        <>
             <div id="contenedorMovies">
                <RowStyled >
                    <ColStyled sm={6} md={4} lg={3} className="align-items-stretch">
                        <CardStyled>    
                            <CardBody >
                                <CardTitle> 1 </CardTitle>
                                <CardText> Calificación </CardText>
                                <CardFooter>2 days ago
                                </CardFooter> 
                            </CardBody>
                        </CardStyled>
                    </ColStyled>
                </RowStyled >
            </div>
        </>
    )
}