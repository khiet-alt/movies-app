import React from 'react'
import Header from './Header'
import Home from './Home'
import Favorite from './Favorite'
import Movies from './Movies'
import MovieDetail from './MovieDetail'
import { Footer } from './Footer'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import type { RootState, AppDispatch } from '../redux/configureStore'
import { fetchMovies, fetchFavorites, addFavor, removeFavor, fetchComments, postComment, deleteComment, loginUser, logoutUser, signupUser } from '../redux/ActionCreators'

const mapStateToProps = (state: RootState) => ({
    movies: state.movies,
    comments: state.comments,
    favorites: state.favorites,
    auth: state.auth
})

const mapDispatchToProps = (dispatch: any) => ({
    fetchMovies: () => { dispatch(fetchMovies())},
    fetchComments: () => { dispatch(fetchComments())},
    fetchFavorites: () => { dispatch(fetchFavorites())},
    addFavor: (favorId: string) => { dispatch(addFavor(favorId))},
    removeFavor: (favorId: string) => { dispatch(removeFavor(favorId))},
    postComment: (movieId: string, comment: string) => { dispatch(postComment(movieId, comment))},
    deleteComment: (commentId: string) => { dispatch(deleteComment(commentId))}, 
    loginUser: (creds: user) => { dispatch(loginUser(creds))},
    logoutUser: () => { dispatch(logoutUser())},
    signupUser: (creds: user) => { dispatch(signupUser(creds))}
})

class Main extends React.Component<any, any> {

    componentDidMount(){
        this.props.fetchMovies()
        this.props.fetchComments()
        this.props.fetchFavorites()
    }

    componentWillUnmount(){
        this.props.logoutUser()
    }

    render(){

        const HomePage = () => (
            <Home />
        )
        const moviesPage = () => (
            <Movies movies={this.props.movies.movies} />
        )
        const FavoritePage = () => (
            this.props.favorites.favorites !== null
                ? <Favorite favors={this.props.movies.movies.filter((item: movie) => this.props.favorites.favorites.movies.indexOf(item._id) !== -1)} 
                    removeFavor={this.props.removeFavor} />
                : <h3>There are no favorites<hr/></h3>
        )
        const movieWithId = ({match}: any) => (
            <MovieDetail 
                movie={this.props.movies.movies.filter((item: movie) => item._id === match.params.movieId)[0]}
                favorites={this.props.favorites}
                isLoading={this.props.movies.isLoading}
                errMess={this.props.movies.errMess}
                comments={this.props.comments.comments.filter((item: comment) => item.movie === match.params.movieId)}
                postComment={this.props.postComment}
                deleteComment={this.props.deleteComment}
                addFavor={this.props.addFavor}
                removeFavor={this.props.removeFavor}
            />
        )

        return (
            <div>
                <Header auth={this.props.auth}
                    loginUser={this.props.loginUser}
                    logoutUser={this.props.logoutUser}
                    signupUser={this.props.signupUser} />
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route path="/favorites" component={FavoritePage} />
                    <Route exact path="/movies" component={moviesPage} />
                    <Route exact path="/movies/:movieId" component={movieWithId} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main))
// read mapdispatchtoprops document in react-redux.js.org to more infor.