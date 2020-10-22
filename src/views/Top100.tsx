import React, { useEffect, useState } from 'react'
import { Card } from 'components/card/Card';
import { MovieContainer } from 'components/movieContainer/MovieContainer';
import { ApiDS } from 'utils/services/ApiDataSets';
import InfiniteScroll from 'react-infinite-scroll-component';
import { DatasetMovieResponse } from 'utils/types';
import { CardParagraph } from 'components/card/CardStyles'
import { splitGenders } from 'utils/utilities';
import { TopButton } from 'components/top/top';

export const Top100 = () => {
    const api = ApiDS;
    const [data, setData] = useState({
        responseAll: []  as Array<DatasetMovieResponse>, 
        response20: [] as Array<DatasetMovieResponse>,
        loading: true
    })

    useEffect(() => {
        async function getAllMovies(){
            const response = await api.getTop100();
            setData({
                loading: false,
                responseAll:(response as Array<DatasetMovieResponse>),
                response20:(response as Array<DatasetMovieResponse>),
            })
        }
        getAllMovies()
    }, [api])
    const fetchMoreData = () => {
        
    }

    return (
        <>
            <InfiniteScroll
                dataLength={data.responseAll.length}
                next={fetchMoreData}
                hasMore={true || false}
                loader={<h1 style={{backgroundColor: 'white'}} >Loading...</h1>}
                >
                <MovieContainer>
                    {!!data.response20 && 
                        data?.response20.map( (i, index) => {
                            return <Card title={i.title} rating={i.rating} key={i.movieId} keyValue={index + 1}tmdbID={i.tmdbId}>
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
            <MovieContainer>
                <Card title="Test movie1" rating="5.9" keyValue="1" description="Carlos es el sastre más prestigioso de Granada. Un hombre respetable. Su vida es el trabajo y comer. Pero no cualquier cosa: se alimenta de mujeres desconocidas, con las que no tiene ningún vínculo emocional. Pero todo eso cambia el día que conoce a la joven rumana Nina, que busca desesperadamente a su hermana gemela Alexandra, desaparecida días atrás. Carlos es el sastre más prestigioso de Granada. Un hombre respetable. Su vida es el trabajo y comer. Pero no cualquier cosa: se alimenta de mujeres desconocidas, con las que no tiene ningún vínculo emocional. Pero todo eso cambia el día que conoce a la joven rumana Nina, que busca desesperadamente a su hermana gemela Alexandra, desaparecida días atrás." />
                <Card title="Test movie1" rating="5.9" keyValue="2" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown "/>
                <Card title="Test movie1" rating="5.9" keyValue="3" description="Perro hpta"/>
                <Card title="Test movie1" rating="5.9" keyValue="4" description="Perro hpta"/>
                <Card title="Test movie1" rating="5.9" keyValue="5" description="Perro hpta"/>
                <Card title="Test movie1" rating="5.9" keyValue="6" description="Perro hpta"/>
                <Card title="Test movie1" rating="5.9" keyValue="7" description="Perro hpta"/>
                <Card title="Test movie1" rating="5.9" keyValue="8" description="Perro hpta"/>
                <Card title="Test movie1" rating="5.9" keyValue="9" description="Perro hpta"/>
                <Card title="Test movie1" rating="5.9" keyValue="10" description="Perro hpta"/>
                <Card title="Test movie1" rating="5.9" keyValue="11" description="Perro hpta"/>
            </MovieContainer>
            <TopButton></TopButton>
        </>
    )
}
