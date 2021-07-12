
import * as React from 'react';
import { Text, View, ScrollView, SafeAreaView, FlatList } from 'react-native';
import { SET_MOVIES } from '../redux/types'
import { connect } from 'react-redux'
import Category from './Category';
import MovieList from "./MovieList";
import CustomText from '../components/Text'

const MovieCategoryList = ({ movies }) => {
    if (movies && movies.length) {
        const categorisedMovieList = {}
        for (let movie of movies) {
            const { classification } = movie
            if (!(classification in categorisedMovieList)) {
                categorisedMovieList[classification] = []
            }
            categorisedMovieList[classification].push(movie)
        }
        const arr = Object.keys(categorisedMovieList).map((key, i) => {
            return <View key={key} style={{ height: "33%" }}>
                <Category title={key}>
                    <MovieList horizontal={true} movieList={categorisedMovieList[key]} />
                </Category>
            </View>

        })

        return <FlatList
            data={[...arr]}
            renderItem={({ item }) => item}
        />
    }
    else
        return <CustomText>
            Loading...
        </CustomText>
}

const mapStateToProps = state => {
    return {
        movies: state.movies.movies
    };
};

export default connect(mapStateToProps)(MovieCategoryList)