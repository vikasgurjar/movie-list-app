
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux'
import MovieList from '../components/MovieList';
import Header from '../components/Header'
import { StatusBar } from 'expo-status-bar';
function MoviesLiked({ dispatch, movies }) {
    return (
        <View style={{ flex: 1, marginTop: 30 }}>
            <View style={{ marginLeft: 15 }}>
                <Header value={'Liked Movies'} />
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 10, paddingRight: 10, marginRight: 10, width: "100%" }}>
                {movies && movies.length > 0 ?
                    <MovieList horizontal={false} movieList={movies} />
                    :
                    <Text>Your liked movies will appear here...</Text>
                }
            </View>
            <StatusBar style="dark" />
        </View>
    );
}

const mapStateToProps = state => {
    return {
        movies: getLikedMovieList(state.movies.movies, state.movies.likedMovies)
    }
}

function getLikedMovieList(movies, likedMovies) {
    const likedMoviesList = likedMovies.map(movieId => {
        return movies.find(elem => elem.id === movieId)
    })
    return likedMoviesList
}
export default connect(mapStateToProps)(MoviesLiked)