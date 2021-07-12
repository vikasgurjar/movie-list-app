import * as React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import MovieCard from './MovieCard';
import CustomText from './Text';
const MovieList = ({ movieList, horizontal }) => {
    if (movieList.length == 0)
        return <View style={styles.noResultContainer}>
            <CustomText>No Results Found</CustomText>
        </View>
    return (
        <View style={{ ...styles.listContainer, width: horizontal ? "100%" : "95%" }}>
            <FlatList horizontal={horizontal}
                data={movieList}
                renderItem={({ item }) => <MovieCard key={item.id} movie={item} />}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={true}>
            </FlatList>
        </View>
    )
}

const styles = StyleSheet.create({
    noResultContainer: {
        flex: 1,
        flexDirection: 'row',
        width: "100%",
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    listContainer: {
        flexDirection: 'row',
        flex: 1
    }
})

export default MovieList;