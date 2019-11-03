import React, {useState} from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import CustomHeader from '../components/CustomHeader';
import BasicPack from '../packs/BasicPack';
import MoviesPack from '../packs/MoviesPack';
import TVShowsPack from '../packs/TVShowsPack';
import LocationHeader from '../components/LocationHeader';
import { useSelector } from 'react-redux';

const LocationScreen = props => {

    const goToStart = () => {
        props.navigation.navigate({routeName: 'Start'})
    }
    const isBasics = useSelector(state => state.packs.isBasics);
    const isMovies = useSelector(state => state.packs.isMovies);
    const isTVShows = useSelector(state => state.packs.isTVShows);
    const Basics = <BasicPack />;
    const Movies = <MoviesPack />;
    const TVShows = <TVShowsPack />;
    const Nothing = <View></View>;
    
    const [isOpenBasics, setIsOpenBasic] = useState(true);
    const [isOpenMovies, setIsOpenMovies] = useState(false);
    const [isOpenTVShows, setIsOpenTVShows] = useState(false);


    const changeBasics = () => {
        setIsOpenBasic(!isOpenBasics);
    }
    const changeMovies = () => {
        setIsOpenMovies(!isOpenMovies);
    }
    const changeTVShows = () => {
        setIsOpenTVShows(!isOpenTVShows);
    }

    console.log(isBasics)

    return (
        <View style={styles.container}>
            <CustomHeader onClick={goToStart}>back</CustomHeader>
            <ScrollView>
                <View style={styles.scroll}>
                    <LocationHeader value={isBasics} onClick={changeBasics}>Basic</LocationHeader>
                    {isOpenBasics ? Basics : Nothing}
                    <LocationHeader value={isMovies} onClick={changeMovies}>Movies</LocationHeader>
                    {isOpenMovies ? Movies : Nothing}
                    <LocationHeader value={isTVShows} onClick={changeTVShows}>TV Shows</LocationHeader>
                    {isOpenTVShows ? TVShows : Nothing}
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scroll: {
        paddingTop: 30,
        paddingBottom: 10,
        
    },
})

export default LocationScreen