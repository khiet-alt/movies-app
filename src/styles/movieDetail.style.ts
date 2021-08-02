import styled from "styled-components";
import {Card} from 'react-bootstrap'

export const Wrapper = styled.div`
    background-color: pink;
    margin-top: 30px;
    margin-bottom: 30px;

    .header-comment {
        display: flex;
        justify-content: space-between;
    }

    .button-end {
        display: flex;
        justify-content: flex-end;

    }

    .row > div{
        margin-top: 10px;
    }
`

export const CardWrapper = styled(Card)`
    max-width: 400px;

    img {
        object-fit: cover;
        
    }
`