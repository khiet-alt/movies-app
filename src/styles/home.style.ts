import styled from 'styled-components'
import { Carousel } from 'react-bootstrap'
export const Jumpotron = styled.div`
    background-color: grey;

`

export const CarouselWrapper = styled(Carousel)`
    img { 
        max-height: 400px;
        object-fit: cover;
        opacity: 0.7;
    }
`