import styled from 'styled-components'
import { Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export const Wrapper = styled(Navbar)`
    background: hsl(210deg 54% 50% / 10%);
    
    div {
        color: #9b1717;
        font-weight: 700;
    }

    // button {
    //     background-color: #582b10;
    // }
`

export const NavLinkStyle = styled(NavLink)`
    margin: 5px;
    a {
        color: #a51717;
    }
    background-color: white;
`

export const ButtonStyled = styled.button`
    margin: 10px 15px;
`