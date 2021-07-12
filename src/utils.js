import { SET_MOVIES } from './redux/types'

export const getGenre = (genres) => {
    let genre = ''
    genres.map((elem, i) => {
        genre += elem
        if (i !== genres.length - 1)
            genre += '/'
    })
    return genre
}

export const getMovies = function (dispatch) {
    fetch(`https://wookie.codesubmit.io/movies`, {
        method: 'get',
        headers: new Headers({
            'Authorization': 'Bearer Wookie2019',
            'Content-Type': 'application/json'
        })
    })
        .then(res => res.json())
        .then(data => {
            dispatch({ type: SET_MOVIES, payload: data.movies })
        }).catch(err => {
            console.log(err)
        })
}