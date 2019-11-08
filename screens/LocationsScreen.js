import React, {useState} from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import CustomHeader from '../components/CustomHeader';
import BasicPack from '../packs/BasicPack';
import BasicPack2 from '../packs/BasicPack2';
import MoviesPack from '../packs/MoviesPack';
import TVShowsPack from '../packs/TVShowsPack';
import LocationHeader from '../components/LocationHeader';
//import { useSelector } from 'react-redux';
// ------use redux later-------------------

const LocationScreen = props => {

    const goToStart = () => {
        props.navigation.navigate({routeName: 'Start', params: {
            isBasics: isBasics, isBasics2: isBasics2, isMovies: isMovies, isTVShows: isTVShows,
        }})
    }
    const [isBasics, setIsBasics] = useState(true); 
    const [isBasics2, setIsBasics2] = useState(true);
    const [isMovies, setIsMovies] = useState(false); //useSelector(state => state.packs.isMovies);
    const [isTVShows, setIsTVShows] = useState(false);
    const Basics = <BasicPack />;
    const Basics2 = <BasicPack2 />;
    const Movies = <MoviesPack />;
    const TVShows = <TVShowsPack />;
    const Nothing = <View></View>;
    
    const [isOpenBasics, setIsOpenBasic] = useState(true);
    const [isOpenBasics2, setIsOpenBasic2] = useState(false);
    const [isOpenMovies, setIsOpenMovies] = useState(false);
    const [isOpenTVShows, setIsOpenTVShows] = useState(false);


    const changeBasics = () => {
        setIsOpenBasic(!isOpenBasics);
    }
    const changeBasics2 = () => {
        setIsOpenBasic2(!isOpenBasics2);
    }
    const changeMovies = () => {
        setIsOpenMovies(!isOpenMovies);
    }
    const changeTVShows = () => {
        setIsOpenTVShows(!isOpenTVShows);
    }

    const toggleBasics = () => {
        setIsBasics(!isBasics);
    }
    const toggleBasics2 = () => {
        setIsBasics2(!isBasics);
    }
    const toggleMovies = () => {
        setIsMovies(!isMovies);
    }
    const toggleTVShows = () => {
        setIsTVShows(!isTVShows);
    }
    // console.log(isBasics)
    // console.log(isMovies)
    // console.log(isTVShows)
    // console.log('---------changed------')

    return (
        <View style={styles.container}>
            <CustomHeader onClick={goToStart}>back</CustomHeader>
            <ScrollView>
                <View style={styles.scroll}>
                    <LocationHeader value={isBasics} onToggle={toggleBasics} onClick={changeBasics}>Basic</LocationHeader>
                    {isOpenBasics ? Basics : Nothing}
                    <LocationHeader value={isBasics2} onToggle={toggleBasics2} onClick={changeBasics2}>Basic 2</LocationHeader>
                    {isOpenBasics2 ? Basics2 : Nothing}
                    <LocationHeader value={isMovies} onToggle={toggleMovies} onClick={changeMovies}>Movies</LocationHeader>
                    {isOpenMovies ? Movies : Nothing}
                    <LocationHeader value={isTVShows} onToggle={toggleTVShows} onClick={changeTVShows}>TV Shows</LocationHeader>
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