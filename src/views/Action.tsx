import React, { useEffect, useState } from 'react'
import { Card } from 'components/card/Card';
import { MovieContainer } from 'components/movieContainer/MovieContainer';
import { ApiDS } from 'utils/services/ApiDataSets';
import InfiniteScroll from 'react-infinite-scroll-component';
import { DatasetMovieResponse } from 'utils/types';
import { CardParagraph } from 'components/card/CardStyles'
import { splitGenders } from 'utils/utilities';

export const Action = () => {
    const api = ApiDS;
    const [data, setData] = useState({
        responseAll: []  as Array<DatasetMovieResponse>, 
        response20: [] as Array<DatasetMovieResponse>,
        loading: true
    })

    useEffect(() => {
        async function getAllMovies(){
            const response = await api.filterByGenre('Action');
            setData({
                loading: false,
                responseAll:(response as Array<DatasetMovieResponse>),
                response20:(response as Array<DatasetMovieResponse>).slice(0, 100),
            })
        }
        getAllMovies()
    }, [api]);

    const fetchMoreData = () => {
        
    }

    return (
        <>
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