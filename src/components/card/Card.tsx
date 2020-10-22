import React, { FunctionComponent, useEffect, useState } from 'react';
import { ApiTMDB } from 'utils/services/ApiTheMovieDB';
import { ColStyled, CardStyled, CardBody, CardTitle, CardRating, CardText, CardFooter, CardHover} from './CardStyles';

interface CardProps {
    keyValue: number;
    rating: number;
    title: string;
    tmdbID: number;
    children: any;
}

export const Card: FunctionComponent<CardProps> = ({keyValue, rating, title, children, tmdbID}) => {
    const [movieInfo, setMovieInfo] = useState({
        path: "",
        description: "",
    });
    const apiTMDB = ApiTMDB;
    useEffect(() => {
        async function getImagesAndDescription() {
            try {
                const path = await apiTMDB.getOneMoviePoster(tmdbID);
                const movie_description = await apiTMDB.getMovieDescription(tmdbID);
                setMovieInfo({
                    path: !!path ? `url('https://image.tmdb.org/t/p/w500${path}')` as string : '',
                    description: movie_description as string,
                }); 
            } catch {
                setMovieInfo({
                    path: `'url('https://picsum.photos/600/500/?random')'`,
                    description: '',
                }); 
            }
        }
        getImagesAndDescription();
    }, [apiTMDB, tmdbID])

    return (
        <>
            <ColStyled sm={6} md={4} lg={3}>
                {
                    <CardStyled $imgPath={movieInfo.path}>    
                        <CardBody >
                            <CardTitle> <h5>{ keyValue }</h5>
                            <CardHover> {movieInfo.description} </CardHover> 
                            </CardTitle>
                            <CardRating> { rating.toFixed(1) } </CardRating>
                            <CardText> { title } </CardText>
                            <CardFooter>                                    
                                {children}
                            </CardFooter>
                        </CardBody>
                    </CardStyled>               
                }
            </ColStyled>
        </>
    )
}