// Type of movie
interface episode {
    episode: string;
    url: string;
    type: string;
}

interface movie {
    _id: string;
    category: string;
    imageUrl: string;
    title: string;
    url: string;
    episode: episode[];
    description: string;
}

interface movieState {
    isLoading: boolean;
    errMess: string | null;
    movies: movie[] | movie;
}

interface ActionMovie {
    type: string;
    payload?: movie[] | string;
}

type DispatchMovie = (args: ActionMovie) => Promise<ActionMovie>

// Type of favorites
type favorite = {
    user: user;
    movies: string[];
}

type favoriteState = {
    isLoading: boolean;
    errMess: string | null;
    favorites: favorite | null;
}

type ActionFavorite = {
    type: string;
    payload: favorite | string
}

type DispatchFavorite = (args: ActionFavorite) => Promise<ActionFavorite>

// Type of User
type user = {
    username: string;
    password: string;
}

type userState = {
    isLoading: boolean;
    isAuthenticated: boolean;
    token: string | null;
    user: user | null;
    errMess?: string | null;
}

type ActionUser = {
    type: string;
    token?: string | null;
    creds?: user | null
    user?: user | null;
    message?: string | null;
}

type DispatchUser = (args: ActionUser) => Promise<ActionUser>

// Type of comments
type author = {
    _id?: string;
    username: string;
    lastname?: string;
    firstname?: string;
    admin?: boolean;
}

type comment = {
    _id: string;
    comment: string;
    author: author;
    movie: string;
}

type commentState = {
    errMess: string | null;
    comments: comment[]
}

type ActionComment = {
    type: string;
    payload: comment[] | string | comment
}

type DispatchComment = (args: ActionComment) => Promise<ActionComment>