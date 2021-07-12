import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MoviesHome from './pages/moviesHomePage'
import MovieDetails from './pages/movieDetails'
import MoviesLiked from './pages/moviesLiked';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Home Page Stack with Movie List Page and Movie Details Page
function MovieStack() {
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{
            headerStyle: {
                backgroundColor: '#fff',
                height: 30,
                elevation: 0,
                shadowOpacity: 0
            },
            headerTintColor: '#9d9d9d'
        }}>
            <Stack.Screen name="Home" options={{ title: '' }} component={MoviesHome} />
            <Stack.Screen name="Details" options={{
                title: '', headerStyle: {
                    backgroundColor: 'transparent',
                    elevation: 0,
                    shadowOpacity: 0
                }
            }} component={MovieDetails} />
        </Stack.Navigator>
    );
}

//Bottom Tabs for Home and Liked Movies Page
function BottomTabs() {
    return (
        <Tab.Navigator tabBarOptions={{
            activeTintColor: '#f16716',
            inactiveTintColor: '#575757',
        }}>
            <Tab.Screen name="Movies" component={MovieStack} options={{
                tabBarIcon: ({ color, size }) => (
                    <Icon name="isv" size={size} color={color} />
                ),
            }} />
            <Tab.Screen name="Liked Movies" component={MoviesLiked} options={{
                tabBarIcon: ({ color, size }) => (
                    <Icon name="heart" size={size} color={color} />
                ),
            }} />
        </Tab.Navigator>
    );
}

export default BottomTabs