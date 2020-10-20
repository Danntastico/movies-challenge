import { Row, Col, Card } from 'react-bootstrap';
import styled from 'styled-components';

export const RowStyled = styled(Row)`
    margin: 8px 40px 20px 40px;

    @media screen and (max-width: 768px) {
        margin: 8px 30px 20px 30px;
    }
`;

export const ColStyled = styled(Col)`
`;

export const CardStyled = styled(Card)`
    cursor       : pointer;
    margin-top   : 15px;
    margin-bottom: 15px;
    border: 1px solid #d8a200;
    border-radius: 20px;
    box-shadow: 0 0.5px 5px 0 #d8a200, 0 0.5px 5px 0 #d8a200;
    background-image: url('https://picsum.photos/600/300/?random');

    &:hover {
        transform : scale(1.03);
        transition: transform .4s ease 0s;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    &::before, &::after {
        position  : absolute;
        top       : 0;
        right     : 0;
        bottom    : 0;
        left      : 0;
        transform : scale3d(0, 0, 1);
        transition: transform .1s ease 0s;
        background: rgba(255, 255, 255, 0.03);
        content   : '';
    }

    &::before {
    transform-origin: left top;
    }

    &::after {
        transform-origin: right bottom;
    }

    &:hover::before, &:hover::after, &:focus::before, &:focus::after {
    transform: scale3d(1, 1, 1);
    }
`;

export const CardBody = styled(Card.Body)`
    width: 100%;
    color: #ffff;
    border-radius: 20px;
    padding: 0;

    background: rgba(254,254,254,0);
    background: -moz-linear-gradient(top, rgba(254,254,254,0) 0%, rgba(70,70,70,0) 62%, rgba(52,52,52,0.85) 68%, rgba(28,28,28,0.85) 76%, rgba(0,0,0,0.85) 100%);
    background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(254,254,254,0)), color-stop(62%, rgba(70,70,70,0)), color-stop(68%, rgba(52,52,52,0.85)), color-stop(76%, rgba(28,28,28,0.85)), color-stop(100%, rgba(0,0,0,0.85)));
    background: -webkit-linear-gradient(top, rgba(254,254,254,0) 0%, rgba(70,70,70,0) 62%, rgba(52,52,52,0.85) 68%, rgba(28,28,28,0.85) 76%, rgba(0,0,0,0.85) 100%);
    background: -o-linear-gradient(top, rgba(254,254,254,0) 0%, rgba(70,70,70,0) 62%, rgba(52,52,52,0.85) 68%, rgba(28,28,28,0.85) 76%, rgba(0,0,0,0.85) 100%);
    background: -ms-linear-gradient(top, rgba(254,254,254,0) 0%, rgba(70,70,70,0) 62%, rgba(52,52,52,0.85) 68%, rgba(28,28,28,0.85) 76%, rgba(0,0,0,0.85) 100%);
    background: linear-gradient(to bottom, rgba(254,254,254,0) 0%, rgba(70,70,70,0) 62%, rgba(52,52,52,0.85) 68%, rgba(28,28,28,0.85) 76%, rgba(0,0,0,0.85) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fefefe', endColorstr='#000000', GradientType=0 );

`;

export const CardTitle = styled(Card.Title)`
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size  : 25px;
    width      : 35px;
    padding-left: 12px;
    margin-bottom: 18vh;
    border-top-left-radius: 20px 20px;
    border-bottom-right-radius: 20px 20px;
    border: 1px solid #d8a200;
    background-color: rgba(49, 44, 25, 0.7);

    @media screen and (max-width: 768px) {
        margin-bottom: 150px;
    }
`;

export const CardRating = styled(Card.Text)`
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size  : 19px;
    width      : 50px;
    margin-left: 75%;
    color: #f6be0e;
    background-color: rgba(38, 38, 38, 0.75);
    padding: 10px 5px 10px 5px;
    border-radius: 10px;
    border: 1px solid #d8a200;
    text-align: center;
`;

export const CardText = styled(Card.Text)`
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size  : 19px;
    width      : 85%;
    margin: auto;

    
    @media screen and (max-width: 768px) {
        font-size  : 15px;
    }
`;

export const CardFooter = styled(Card.Footer)`
    width: 80%;
    margin: auto;
    border-top: 1px solid #69614C;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size  : 19px;
    color: #225a7d;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: stretch;
    align-items: center;
`;

export const CardParagraph = styled(Card.Text)`
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size  : 10px;
    width      : 40%;
    padding: 4px 0px 4px 0px;
    margin: 0;
    border-radius: 10px;
    background-color: #212121;
    order: 0;
    flex: 0 1 auto;
    align-self: auto;
    text-align: center;
`;


