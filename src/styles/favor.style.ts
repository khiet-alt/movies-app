import styled from 'styled-components'
import { Card } from 'react-bootstrap'

export const CardWrapper = styled(Card)`
    img {
        object-fit: contain;
        max-height: 400px;
    }
    border: none;
`

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
`