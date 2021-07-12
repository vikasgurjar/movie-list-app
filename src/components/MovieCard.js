import * as React from 'react';
import { TouchableOpacity, Text, View, StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux'
import { useNavigationState, useNavigation } from '@react-navigation/native';
import { SELECT_MOVIE } from '../redux/types'
import Icon from 'react-native-vector-icons/FontAwesome';
import { getGenre } from '../utils'
import CustomText from './Text';

const MovieCard = ({ dispatch, movie }) => {
    const navigation = useNavigation();
    const routes = useNavigationState(state => state.routes)
    const currentRoute = routes[routes.length - 1].name

    const handleOnPress = () => {
        dispatch({ type: SELECT_MOVIE, payload: movie.id })
        navigation.navigate('Details')
    }

    return <TouchableOpacity onPress={handleOnPress} >
        <View style={styles.card}>
            <Image style={styles.image} source={{ uri: movie.poster }} />
            <View style={styles.cardContent}>
                <View style={styles.title}>
                    <CustomText type="thin">
                        <Text numberOfLines={2}>
                            {movie.title}
                        </Text>
                    </CustomText>
                </View>
                {currentRoute != "Home" ?
                    <CustomText type="thin">
                        <Text style={{ color: "#f16716" }}>{getGenre(movie.genres)}</Text>
                    </CustomText>
                    :
                    <Text>{movie.imdb_rating}
                        <Icon name="star" size={12} color="#f16716" />
                    </Text>
                }
            </View>

        </View>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    card: {
        height: 150,
        width: "98%",
        maxWidth: "99%",
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 5,
        paddingRight: 10,
    },
    cardContent: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "space-between",
    },
    title: {
        width: 150
    },
    image: {
        borderRadius: 5,
        width: "100%",
        height: 100,
        marginBottom: 5,
    },
});

export default connect()(MovieCard)
