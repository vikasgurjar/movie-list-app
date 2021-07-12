
import * as React from 'react';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { SEARCH_MOVIES } from '../redux/types'
import { connect } from 'react-redux'
import MovieCategoryList from '../components/MovieCategoryList';
import CustomText from '../components/Text'
import MovieList from '../components/MovieList'
import Header from '../components/Header'
import { getMovies } from '../utils'
function MoviesHome({ dispatch, filteredMovies }) {
    const [searchText, setSearchText] = useState('')
    useEffect(() => {
        //fetching Movies List from api
        getMovies(dispatch)
    }, [])

    // handle search input
    const handleTextChange = (value) => {
        if (value)
            dispatch({ type: SEARCH_MOVIES, payload: value })
        setSearchText(value)
    }
    return (
        <View style={styles.container} >
            <TextInput
                onChangeText={handleTextChange}
                value={searchText}
                placeholder=" Search Movies"
                style={styles.input}
            />
            <Header value={"Movies"} />
            {searchText ?
                <MovieList horizontal={false} movieList={filteredMovies} />
                :
                <MovieCategoryList />
            }
        </View>
    );
}

const styles = StyleSheet.create(
    {
        container: {
            paddingLeft: 15,
            flex: 1,
            alignItems: 'flex-start',
            backgroundColor: "#fff",
            justifyContent: 'flex-start',
            height: '100%'
        },
        input: {
            marginTop: 10,
            marginBottom: 5,
            width: "95%",
            padding: 2,
            paddingLeft: 20,
            backgroundColor: "#e7e7e7",
            height: 36,
            borderRadius: 20
        }
    }
)

const mapStateToProps = state => {
    return {
        filteredMovies: state.movies.filteredMovies
    }
}

export default connect(mapStateToProps)(MoviesHome)