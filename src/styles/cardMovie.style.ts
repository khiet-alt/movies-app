import styled from "styled-components";
import { Link } from 'react-router-dom'

export const Wrapper = styled.div`
    margin: 10px;
    img {
        height: 290px;
        object-fit: cover;

    }

    img:hover {
        border: 1px solid red;
    }
`

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: indianred;

    &:hover {
        box-shadow: 5px 5px 20px 2px darkred
    }
`

export const Search = styled.div`
    align-self: center;
    margin: 10px 0 50px 0;
    height: 40px;
    width: 650px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    .search-bar-text {
        color: white;
        width: 80%;
        height: 100%;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        padding-left: 10px;
        border: none;
        outline: none;
        font-style: italic;
        font-size: 16px;
        background-color: black;
    }
    
    .search-bar-submit {
        width: 20%;
        height: 100%;
        cursor: pointer;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        border: none;
        outline: none;
        background-color: #de2418;
        color: #fff;
        font-size: 16px;
        font-weight: 500;
    }
`

