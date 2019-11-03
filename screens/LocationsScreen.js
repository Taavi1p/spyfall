import React, {useState} from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import CustomHeader from '../components/CustomHeader';
import BasicPack from '../packs/BasicPack';
import MoviesPack from '../packs/MoviesPack';
import TVShowsPack from '../packs/TVShowsPack';
import LocationHeader from '../components/LocationHeader';

const LocationScreen = props => {

    const goToStart = () => {
        props.navigation.navigate({routeName: 'Start'})
    }

    const Basics = <BasicPack />;
    const Movies = <MoviesPack />;
    const TVShows = <TVShowsPack />;
    const Nothing = <View></View>;
    
    const [isBasics, setIsBasic] = useState(true);
    const [isMovies, setIsMovies] = useState(true);
    const [isTVShows, setIsTVShows] = useState(true);

    const changeBasics = () => {
        setIsBasic(!isBasics);
    }
    const changeMovies = () => {
        setIsMovies(!isMovies);
    }
    const changeTVShows = () => {
        setIsTVShows(!isTVShows);
    }

    return (
        <View style={styles.container}>
            <CustomHeader onClick={goToStart}>back</CustomHeader>
            <ScrollView style={styles.scroll}>
                <LocationHeader onClick={changeBasics}>Basic</LocationHeader>
                {isBasics ? Basics : Nothing}
                <LocationHeader onClick={changeMovies}>Movies</LocationHeader>
                {isMovies ? Movies : Nothing}
                <LocationHeader onClick={changeTVShows}>TV Shows</LocationHeader>
                {isTVShows ? TVShows : Nothing}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scroll: {
        paddingTop: 40,
    },
    headerContainer: {
        flexDirection: 'row',
        paddingLeft: 10,
        backgroundColor: '#ebebeb',
        height: 50,
        alignItems: 'center'
    },
    text: {
        fontSize: 30,
        lineHeight: 50,
        textAlignVertical: 'center',
    },
    toggle: {
        marginLeft: 20,
    },
    image: {
        height: 30,
        width: 30,
        marginLeft: 'auto',
    },
    clickArea: {
        height: '100%',
        justifyContent: 'center',
        paddingRight: 20,
        flex: 1,
    }
})

export default LocationScreen