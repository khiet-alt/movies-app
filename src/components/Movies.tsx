import React from 'react'
import { Card } from 'react-bootstrap'
import { Wrapper, StyledLink, Search } from '../styles/cardMovie.style'

class Movies extends React.Component<any, any> {

    render(){
        const searchBar = (
            <Search className="search-bar" id="search">
                <input className="search-bar-text" placeholder="Nhập tên film muốn tìm kiếm" type="text"></input>
                <input className="search-bar-submit" type="submit"></input>
            </Search>
        )

        const movieCard = this.props.movies.map((ele: any) => {
            return (
                    <Wrapper className='col-12 col-md-3 m-1' key={ele._id}>
                        <Card>
                            <StyledLink to={`/movies/${ele._id}`}>
                                <Card.Img variant="top" width="100%" src={ele.imageUrl} />
                                <Card.Body>
                                    <Card.Title>{ele.title}</Card.Title>
                                    <Card.Text>
                                    <span className="fa fa-tags fa-lg"></span>{ele.category}
                                    </Card.Text>
                                </Card.Body>
                            </StyledLink>
                        </Card>
                    </Wrapper>
            )
        })

        return (
            <div className="container-fluid">
                <div className="row" style={{justifyContent: 'center'}}>
                    {searchBar}
                </div>
                <div className="row" style={{justifyContent: 'center'}}>
                    {movieCard}
                </div>
            </div>
        )
    }
}

export default Movies