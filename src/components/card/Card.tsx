import React, { FunctionComponent } from 'react';
import { RowStyled, ColStyled, CardStyled, CardBody, CardTitle, CardText } from './CardStyles';

export const Cards: FunctionComponent = () => {
    return (
        <>
             <div id="contenedorMovies">
                <RowStyled >
                    <ColStyled sm={6} md={4} lg={3} className="align-items-stretch">
                        <CardStyled>    
                            <CardBody >
                                <CardTitle> Titulo </CardTitle>
                                <CardText> Calificación </CardText>
                            </CardBody>
                        </CardStyled>
                    </ColStyled>
                </RowStyled >
            </div>
        </>
    )
}