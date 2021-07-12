import { SET_MOVIES, SELECT_MOVIE, LIKE_MOVIE, UNLIKE_MOVIE, SEARCH_MOVIES } from './types'

const initialState = {
    movies: [],
    currentMovie: {},
    likedMovies: [],
    filteredMovies: []
}

const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MOVIES:
            return {
                ...state,
                movies: action.payload
            }
        case SELECT_MOVIE:
            return {
                ...state,
                currentMovie: state.movies.find(movie => action.payload == movie.id)
            }
        case LIKE_MOVIE:
            return {
                ...state,
                likedMovies: [...state.likedMovies, action.payload]
            }
        case UNLIKE_MOVIE:
            return {
                ...state,
                likedMovies: [...state.likedMovies.filter(movieId => action.payload != movieId)]
            }
        case SEARCH_MOVIES:
            return {
                ...state,
                filteredMovies: state.movies.filter(movie => {
                    const title = movie.title.toLowerCase()
                    return title.includes(action.payload.toLowerCase())
                })
            }
        default:
            return state
    }
}

export default movieReducer