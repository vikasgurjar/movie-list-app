
import * as React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux'
import { LIKE_MOVIE, UNLIKE_MOVIE } from '../redux/types'
import { StatusBar } from 'expo-status-bar';
import Icon from 'react-native-vector-icons/AntDesign';
import CustomText from '../components/Text'
import { getGenre } from '../utils'
function MovieDetails({ dispatch, currentMovie, isLiked }) {
    const handleOnPress = () => {
        dispatch({ type: isLiked ? UNLIKE_MOVIE : LIKE_MOVIE, payload: currentMovie.id })
    }
    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <Image style={styles.image} source={{ uri: currentMovie.poster }}></Image>
            <View style={styles.content}>
                <View style={styles.header}>
                    <View style={styles.title}>
                        <CustomText >
                            <Text style={{ fontSize: 25 }}>{currentMovie.title}</Text>
                        </CustomText>
                    </View>
                    <TouchableWithoutFeedback onPress={handleOnPress} style={{ zIndex: 1 }}>
                        <View style={styles.heart}>
                            {isLiked ?
                                <Icon name="heart" size={40} color="#f16716" />
                                :
                                <Icon name="heart" size={40} color="gray" />
                            }
                        </View>
                    </TouchableWithoutFeedback>

                </View>
                <View style={styles.genre}>
                    <CustomText type="thin"><Text style={{ color: "gray" }}>{getGenre(currentMovie.genres)}</Text></CustomText>
                    <CustomText type="thin"><Text style={{ color: "gray" }}>{currentMovie.length}</Text></CustomText>
                </View>
                <View style={styles.overview}>
                    <CustomText type="thin"><Text style={{ color: "#000", fontSize: 16, textAlign: "justify" }}>{currentMovie.overview}</Text></CustomText>
                </View>
            </View>
        </View >
    );
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            alignItems: 'flex-start',
            backgroundColor: "white",
            justifyContent: 'flex-start',
            height: '100%',
        },
        title: {
            width: "75%"
        },
        heart: {
            position: "relative",
            top: -30,
            right: 5,
            backgroundColor: "#ffffff",
            padding: 10,
            borderRadius: 50,
            elevation: 5
        },
        header: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 5
        },
        image: {
            height: "80%",
            width: "100%",
            marginTop: -150,
        },
        content: {
            flex: 1,
            padding: 10,
            width: "100%",
            height: "100%",
            backgroundColor: "white",
            borderTopRightRadius: 30,
            borderTopLeftRadius: 30,
            top: -30,
        },
        genre: {
            flexDirection: "row",
            justifyContent: "space-between",
            top: -10,
            padding: 2
        },
        overview: {
            marginTop: 5,
            textAlign: "justify",
        }
    }
)

const mapStateToProps = state => {
    return {
        currentMovie: state.movies.currentMovie,
        isLiked: state.movies.likedMovies.includes(state.movies.currentMovie.id)
    };
};

export default connect(mapStateToProps)(MovieDetails)