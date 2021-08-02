import React from 'react'
import {Card, Breadcrumb, Form, Button } from 'react-bootstrap'
import { removeFavor } from '../redux/ActionCreators'
import {NavLinkStyle} from '../styles/header.style'
import { Wrapper, CardWrapper } from '../styles/movieDetail.style'

type PropsMovie = {
    movie: movie;
    addFavor: (favorId: string) => void;
    removeFavor: (favorId: string) => void;
    favorites: favoriteState;
}

const RenderDetailMovie = ({movie, addFavor, favorites}: PropsMovie): JSX.Element => {
    
    const handleAddFavor = (): void => {
        addFavor(movie._id)
    }

    const handleRemoveFavor = (): void => {
        removeFavor(movie._id)
    }

    return (
        <>
            <div className="col-12 col-md-5 m-1">
                <CardWrapper>
                    <Card.Img variant="top" width="100%" src={movie.imageUrl} />
                    <Card.Body>
                        <Card.Title>{movie.title}</Card.Title>
                        <Card.Text>
                        <span className="fa fa-video fa-lg"></span>{movie.category}
                        </Card.Text>
                    </Card.Body>
                </CardWrapper>
            </div>
            <div className="col-12 col-md-5 m-1">
                <div style={{wordBreak: 'break-all', whiteSpace: 'normal'}}>
                    <h3>Film Description</h3>
                    {movie.description}
                    <div className="row">
                        {
                            favorites.errMess === null
                            ?    favorites.favorites !== null
                                 ?    favorites.favorites.movies.some((item: string) => item === movie._id)
                                      ? <Button variant="danger" style={{background: "#e1acb1"}} onClick={handleRemoveFavor} >
                                            <span className="fa fa-heart fa-lg" style={{color: 'orangered', marginRight: '10px'}}></span>Favorited
                                        </Button>
                                      : <Button variant="success" onClick={handleAddFavor} >
                                            <span className="fa fa-heart fa-lg"></span>Add to favorite
                                        </Button>
                                : <Button variant="success" onClick={handleAddFavor} ><span className="fa fa-heart fa-lg"></span>Add to favorite</Button>
                            : <Button variant="success" onClick={() => alert('please login to add your favorites')} >
                                <span className="fa fa-heart fa-lg"></span>Add to favorite
                                </Button>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

type PropsComment = {
    movie: movie,
    comments: comment[],
    postComment: (movieId: string, comment: string) => void,
    deleteComment: (commentId: string) => void
}

const RenderComment = (props: PropsComment) => {
    
    const [comment, setComment] = React.useState('')

    const handlePostComment = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault()
        props.postComment(props.movie._id, comment)
    }

    const handleDeleteComment = (commentId: string) => (event: React.MouseEvent<HTMLElement>) => {
        props.deleteComment(commentId)
    }

    const cmts = props.comments.map((item: comment) => {

        return (
            <div key={item._id} className="row">
                <div className="col-12">
                    <p><strong>{item.author.lastname}{item.author.firstname} / user: {item.author.username}</strong></p>
                    <p>{item.comment}</p>
                    <div className="col-12">
                        <button className="light"><span className="fa fa-thumbs-up fa-lg"></span></button>
                        <button className="light" name={item._id}
                            onClick={handleDeleteComment(item._id)} >Delete</button>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <Wrapper className="container-fluid">
            <div className="row">
                <div className="col-12 header-comment">
                    <h5>{props.comments.length} comments</h5>
                    <h5>Sort by</h5>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <Form.Control size="lg" type="text" placeholder="Write your comment" 
                        value={comment}
                        onChange={(event) => setComment(event.target.value)} />
                </div>
                <div className="col-12 button-end">
                    <Button variant="dark" onClick={handlePostComment}>Post</Button>
                </div>
            </div>
            <div className="container">
                {cmts}
            </div>
        </Wrapper>
    )
}

type Props = {
    isLoading: boolean;
    errMess: string | null;
    movie: movie;
    favorites: favoriteState;
    comments: comment[];
    postComment: (movieId: string, comment: string) => void;
    deleteComment: (commentId: string) => void;
    addFavor: (favorId: string) => void;
    removeFavor: (favorId: string) => void;
}

const MovieDetail = (props: Props) => {

    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <Breadcrumb.Item><NavLinkStyle to='/movies'>Menu</NavLinkStyle></Breadcrumb.Item>
                    <Breadcrumb.Item active>
                        {props.movie.category}
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>

            <div className="row"> 
                <RenderDetailMovie 
                    movie={props.movie} 
                    addFavor={props.addFavor}
                    removeFavor={props.removeFavor}
                    favorites={props.favorites} />
            </div>

            <div className="row">
                <RenderComment movie={props.movie} 
                comments={props.comments} 
                postComment={props.postComment}
                deleteComment={props.deleteComment} />
            </div>
        </div>
    )
}

export default MovieDetail