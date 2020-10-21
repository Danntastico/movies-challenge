import { Row } from 'react-bootstrap';
import styled from 'styled-components';

export const RowStyled = styled(Row)`
    margin: 8px 40px 20px 40px;

    @media screen and (max-width: 768px) {
        margin: 8px 30px 20px 30px;
    }
`;