import React, {useState} from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import CustomHeader from '../components/CustomHeader';
import LocationHeader from '../components/LocationHeader';
import Pack from '../packs/Pack.js';
import aAsia from '../data/asia';
import aBasics from '../data/basics';
import aBasics2 from '../data/basics2';
import aBasics3 from '../data/basics3';
import aBasics4 from '../data/basics4';
import aBasicsCountry from '../data/basicsCounty';
import aEurope from '../data/europe';
import aExotic from '../data/exotic';
import aExotic2 from '../data/exotic2';
import aMovies from '../data/movies';
import aTown from '../data/town';
import aTVShows from '../data/tvshows';
import aVideoGames from '../data/videogames';

const LocationScreen = props => {

    const goToStart = () => {
        props.navigation.navigate({routeName: 'Start', params: {
            isBasics: isBasics, isBasics2: isBasics2, isBasics3: isBasics3, isBasics4: isBasics4, 
            isExotic: isExotic, isExotic2: isExotic2, isTown: isTown,
            isVideogames: isVideogames, isMovies: isMovies, isTVShows: isTVShows,
            isAsia: isAsia, isBasicCountry: isBasicCountry, isEurope: isEurope

        }})
    }
    const [isBasics, setIsBasics] = useState(true); 
    const [isBasics2, setIsBasics2] = useState(true);
    const [isBasics3, setIsBasics3] = useState(false);
    const [isBasics4, setIsBasics4] = useState(false);
    const [isExotic, setIsExotic] = useState(false);
    const [isExotic2, setIsExotic2] = useState(false);
    const [isMovies, setIsMovies] = useState(false); //useSelector(state => state.packs.isMovies);
    const [isTown, setIsTown] = useState(false);
    const [isTVShows, setIsTVShows] = useState(false);
    const [isVideogames, setIsVideogames] = useState(false);
    const [isBasicCountry, setIsBasicCountry] = useState(false);
    const [isAsia, setIsAsia] = useState(false);
    const [isEurope, setIsEurope] = useState(false);
    const Basics = <Pack array={aBasics}/>;
    const Basics2 = <Pack array={aBasics2}/>;
    const Basics3 = <Pack array={aBasics3}/>;
    const Basics4 = <Pack array={aBasics4}/>;
    const Exotic = <Pack array={aExotic}/>;
    const Exotic2 = <Pack array={aExotic2}/>;
    const Movies = <Pack array={aMovies}/>;
    const Town = <Pack array={aTown}/>;
    const TVShows = <Pack array={aTVShows}/>;
    const Nothing = <View></View>;
    const Videogames = <Pack array={aVideoGames}/>;
    const BasicCountry = <Pack array={aBasicsCountry}/>;
    const Asia = <Pack array={aAsia}/>;
    const Europe = <Pack array={aEurope}/>;
    
    const [isOpenBasics, setIsOpenBasic] = useState(true);
    const [isOpenBasics2, setIsOpenBasic2] = useState(false);
    const [isOpenBasics3, setIsOpenBasic3] = useState(false);
    const [isOpenBasics4, setIsOpenBasic4] = useState(false);
    const [isOpenExotic, setIsOpenExotic] = useState(false);
    const [isOpenExotic2, setIsOpenExotic2] = useState(false);
    const [isOpenMovies, setIsOpenMovies] = useState(false);
    const [isOpenTown, setIsOpenTown] = useState(false);
    const [isOpenTVShows, setIsOpenTVShows] = useState(false);
    const [isOpenVideogames, setIsOpenVideogames] = useState(false);
    const [isOpenBasicCountry, setIsOpenBasicCountry] = useState(false);
    const [isOpenAsia, setIsOpenAsia] = useState(false);
    const [isOpenEurope, setIsOpenEurope] = useState(false);

    const changeBasics = () => {
        setIsOpenBasic(!isOpenBasics);
    }
    const changeBasics2 = () => {
        setIsOpenBasic2(!isOpenBasics2);
    }
    const changeBasics3 = () => {
        setIsOpenBasic3(!isOpenBasics3);
    }
    const changeBasics4 = () => {
        setIsOpenBasic4(!isOpenBasics4);
    }
    const changeExotic = () => {
        setIsOpenExotic(!isOpenExotic);
    }
    const changeExotic2 = () => {
        setIsOpenExotic2(!isOpenExotic2);
    }
    const changeMovies = () => {
        setIsOpenMovies(!isOpenMovies);
    }
    const changeTown = () => {
        setIsOpenTown(!isOpenTown);
    }
    const changeTVShows = () => {
        setIsOpenTVShows(!isOpenTVShows);
    }
    const changeVideogames = () => {
        setIsOpenVideogames(!isOpenVideogames);
    }
    const changeBasicCountry = () => {
        setIsOpenBasicCountry(!isOpenBasicCountry);
    }
    const changeAsia = () => {
        setIsOpenAsia(!isOpenAsia);
    }
    const changeEurope = () => {
        setIsOpenEurope(!isOpenEurope);
    }

    const toggleBasics = () => {
        setIsBasics(!isBasics);
    }
    const toggleBasics2 = () => {
        setIsBasics2(!isBasics2);
    }
    const toggleBasics3 = () => {
        setIsBasics3(!isBasics3);
    }
    const toggleBasics4 = () => {
        setIsBasics4(!isBasics4);
    }
    const toggleExotic = () => {
        setIsExotic(!isExotic);
    }
    const toggleExotic2 = () => {
        setIsExotic2(!isExotic2);
    }
    const toggleMovies = () => {
        setIsMovies(!isMovies);
    }
    const toggleTown = () => {
        setIsTown(!isTown);
    }
    const toggleTVShows = () => {
        setIsTVShows(!isTVShows);
    }
    const toggleVideogames = () => {
        setIsVideogames(!isVideogames);
    }
    const toggleBasicCountry = () => {
        setIsBasicCountry(!isBasicCountry);
    }
    const toggleAsia = () => {
        setIsAsia(!isAsia);
    }
    const toggleEurope = () => {
        setIsEurope(!isEurope);
    }
   

    return (
        <View style={styles.container}>
            <CustomHeader onClick={goToStart}>back</CustomHeader>
            <ScrollView>
                <View style={styles.scroll}>
                    <LocationHeader value={isBasics} onToggle={toggleBasics} onClick={changeBasics}>Basic</LocationHeader>
                    {isOpenBasics ? Basics : Nothing}
                    <LocationHeader value={isBasics2} onToggle={toggleBasics2} onClick={changeBasics2}>Basic 2</LocationHeader>
                    {isOpenBasics2 ? Basics2 : Nothing}
                    <LocationHeader value={isBasics3} onToggle={toggleBasics3} onClick={changeBasics3}>Basic 3</LocationHeader>
                    {isOpenBasics3 ? Basics3 : Nothing}
                    <LocationHeader value={isBasics4} onToggle={toggleBasics4} onClick={changeBasics4}>Basic 4</LocationHeader>
                    {isOpenBasics4 ? Basics4 : Nothing}
                    <LocationHeader value={isExotic} onToggle={toggleExotic} onClick={changeExotic}>Exotic</LocationHeader>
                    {isOpenExotic ? Exotic : Nothing}
                    <LocationHeader value={isExotic2} onToggle={toggleExotic2} onClick={changeExotic2}>Exotic 2</LocationHeader>
                    {isOpenExotic2 ? Exotic2 : Nothing}
                    <LocationHeader value={isTown} onToggle={toggleTown} onClick={changeTown}>Town</LocationHeader>
                    {isOpenTown ? Town : Nothing }
                    <LocationHeader value={isMovies} onToggle={toggleMovies} onClick={changeMovies}>Movies</LocationHeader>
                    {isOpenMovies ? Movies : Nothing}
                    <LocationHeader value={isTVShows} onToggle={toggleTVShows} onClick={changeTVShows}>TV Shows</LocationHeader>
                    {isOpenTVShows ? TVShows : Nothing}
                    <LocationHeader value={isVideogames} onToggle={toggleVideogames} onClick={changeVideogames}>Video games</LocationHeader>
                    {isOpenVideogames ? Videogames : Nothing }
                    <LocationHeader value={isBasicCountry} onToggle={toggleBasicCountry} onClick={changeBasicCountry}>Countries</LocationHeader>
                    {isOpenBasicCountry ? BasicCountry : Nothing }
                    <LocationHeader value={isAsia} onToggle={toggleAsia} onClick={changeAsia}>Asia</LocationHeader>
                    {isOpenAsia ? Asia : Nothing }
                    <LocationHeader value={isEurope} onToggle={toggleEurope} onClick={changeEurope}>Europe</LocationHeader>
                    {isOpenEurope ? Europe : Nothing }
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