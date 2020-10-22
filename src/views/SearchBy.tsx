import React, { FunctionComponent, useEffect, useState } from 'react'
import { Card } from 'components/card/Card';
import { MovieContainer } from 'components/movieContainer/MovieContainer';
import { ApiDS } from 'utils/services/ApiDataSets';
import InfiniteScroll from 'react-infinite-scroll-component';
import { DatasetMovieResponse } from 'utils/types';
import { CardParagraph } from 'components/card/CardStyles'
import { splitGenders } from 'utils/utilities';
import { useLocation } from 'react-router-dom';


export const SearchBy:FunctionComponent = () => {
    const [query, setQuery] = useState("")
    const api = ApiDS;
    const [data, setData] = useState({
        responseAll: []  as Array<DatasetMovieResponse>, 
        response20: [] as Array<DatasetMovieResponse>,
        loading: true
    })
    const location = useLocation();
    console.log(location.state)

    useEffect(()=> {
        if(location.state){
            setQuery(location.state as string);
        }
    }, [])

    useEffect(() => {
        async function searchMovie(query: string){
            const response = await api.searchMovie(query);
            setData({
                loading: false,
                responseAll:(response as Array<DatasetMovieResponse>),
                response20:(response as Array<DatasetMovieResponse>).slice(0, 20),
            })
        }

        if(location.state){
            searchMovie(location.state as string)
        }
    }, [api]);

    const fetchMoreData = () => {
        
    }

    return (
        <>
            <h1>Search a Movie</h1>
            <h3>Showing results for: {location.state}</h3>
            <InfiniteScroll
                dataLength={data.response20.length}
                next={fetchMoreData}
                hasMore={true || false}
                loader={<h1 style={{backgroundColor: 'white'}} >Loading...</h1>}
                >
                <MovieContainer>
                    {!!data.response20 && 
                        data?.response20.map( (i, index) => {
                            return <Card 
                                title={i.title} 
                                rating={i.rating} 
                                key={i.movieId} 
                                keyValue={index + 1}
                                tmdbID={i.tmdbId}>
                                {
                                    splitGenders(i.genres).map((genre, index) => 
                                      <CardParagraph key={index}>
                                            {genre}
                                        </CardParagraph>
                                    ).slice(0, 2)
                                }
                            </Card>
                            }
                        )}
                </MovieContainer>
            </InfiniteScroll>
        </>
    )
}