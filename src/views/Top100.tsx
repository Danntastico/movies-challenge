import React from 'react'
import { Card } from 'components/card/Card';
import { MovieContainer } from 'components/movieContainer/MovieContainer';

export const Top100 = () => {
    return (
        <>
            <h1>Top100 section</h1>
            <MovieContainer>
                <Card title="Test movie1" rating="5.9" keyValue="1.0" />
                <Card title="Test movie1" rating="5.9" keyValue="1.0" />
                <Card title="Test movie1" rating="5.9" keyValue="1.0" />
                <Card title="Test movie1" rating="5.9" keyValue="1.0" />
                <Card title="Test movie1" rating="5.9" keyValue="1.0" />
                <Card title="Test movie1" rating="5.9" keyValue="1.0" />
                <Card title="Test movie1" rating="5.9" keyValue="1.0" />
                <Card title="Test movie1" rating="5.9" keyValue="1.0" />
                <Card title="Test movie1" rating="5.9" keyValue="1.0" />
                <Card title="Test movie1" rating="5.9" keyValue="1.0" />
                <Card title="Test movie1" rating="5.9" keyValue="1.0" />
            </MovieContainer>
        </>
    )
}
