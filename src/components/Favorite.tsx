import React from 'react'
import { Breadcrumb, Card, Button } from 'react-bootstrap'
import { removeFavor } from '../redux/ActionCreators'
import { CardWrapper, Wrapper } from '../styles/favor.style'

type PropsItem = {
    favor: movie;
    removeFavor: (favorId: string) => void;
}

const FavorItem = (props: PropsItem) => (
    <>
    <Wrapper className="col-12 col-md-7">
        <CardWrapper>
            <Card.Img variant="top" width="100%" src={props.favor.imageUrl} />
            <Card.Body>
                <Card.Title><hr/></Card.Title>
            </Card.Body>
        </CardWrapper>
    </Wrapper>
    <div className="col-12 col-md-3">
        <Button variant="danger" style={{background: "#e1acb1"}} onClick={() => removeFavor(props.favor._id)} >
            <span className="fa fa-heart fa-lg" style={{color: 'orangered', marginRight: '10px'}}></span>Discard
        </Button>
        <h3>{props.favor.title}</h3>
        <h6><span className="fa fa-video fa-lg"></span>{props.favor.category}</h6>
    </div>
    </>
)

type Props = {
    favors: movie[];
    removeFavor: (favorId: string) => void;
}

const Favorite = (props: Props) => {

    const favorites = props.favors.map((item: movie) => 
        <div key={item._id} className="row">
            <FavorItem favor={item} removeFavor={props.removeFavor} />
        </div>
    )

    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <Breadcrumb.Item href="/home">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>
                        Favorites
                    </Breadcrumb.Item>
                </Breadcrumb>
                <div className="col-12">
                    <h3>My Favorites</h3>
                    <hr/>
                </div>
            </div>

            <div className="col-12">
                {favorites}
            </div>
        </div>
    )
}

export default Favorite