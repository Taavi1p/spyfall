import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import CustomHeader from '../components/CustomHeader';
import MainButton from '../components/MainButton';
import Pack from '../packs/Pack.js'
import Asia from '../data/asia';
import Basics from '../data/basics';
import Basics2 from '../data/basics2';
import Basics3 from '../data/basics3';
import Basics4 from '../data/basics4';
import BasicsCountry from '../data/basicsCounty';
import Europe from '../data/europe';
import Exotic from '../data/exotic';
import Exotic2 from '../data/exotic2';
import Movies from '../data/movies';
import Town from '../data/town';
import TVShows from '../data/tvshows';
import VideoGames from '../data/videogames';
import Colors from '../constants/Colors';
import { LinearGradient } from 'expo-linear-gradient';


let isTicking = false;
let time = 479;

const GameScreen = props => {
    const goToStart = () => {
        isTicking = false;
        time = 479;
        props.navigation.navigate({routeName: 'Start'})
    }
    const isBasics = props.navigation.getParam('isBasics');
    const isBasics2 = props.navigation.getParam('isBasics2');
    const isMovies = props.navigation.getParam('isMovies');
    const isTVShows = props.navigation.getParam('isTVShows');
    const isBasics3 = props.navigation.getParam('isBasics3');
    const isBasics4 = props.navigation.getParam('isBasics4');
    const isExotic = props.navigation.getParam('isExotic');
    const isExotic2 = props.navigation.getParam('isExotic2');
    const isTown = props.navigation.getParam('isTown');
    const isVideogames = props.navigation.getParam('isVideogames');
    const isBasicCountry = props.navigation.getParam('isBasicCountry');
    const isAsia = props.navigation.getParam('isAsia');
    const isEurope = props.navigation.getParam('isEurope');
    let TimeButton;
    let intervally;
    const [timer, setTimer] = useState('8:00');

    const pauseTimer = () => {
        console.log('pausing the timer');
        isTicking = false
    }

    const startTimer = () => {
        console.log('starting the timer');
        intervally = setInterval(tick, 1000);
        isTicking = true;
    }


    const tick = () => {
    
        let min = Math.floor(time / 60);
        let sec = time - (min * 60);
    
        if (sec < 10) {
            sec = "0" + sec;
        }

        if (min === 0 && sec == '00'){
            console.log('clear');
            clearInterval(intervally);
        }

        if(isTicking === false) {
            console.log('pause the clock');
            clearInterval(intervally)
        }
    
        setTimer(min.toString() + ':' + sec.toString());
        time--;
    
    }
    
   if (isTicking === false) {
    TimeButton = <MainButton onClick={startTimer}>Start Timer</MainButton>;
   }
   else if (isTicking === true) {
    TimeButton = <MainButton onClick={pauseTimer}>Pause Timer</MainButton>
   }
    
    let BasicPics;
    let BasicPics2;
    let BasicPics3;
    let BasicPics4;
    let ExoticPics;
    let ExoticPics2;
    let MoviePics;
    let TownPics;
    let TVShowPics;
    let VideogamesPics;
    let BasicCountryPics;
    let AsiaPics;
    let EuropePics;
    
    if (isBasics) {
        BasicPics = <Pack array={Basics} />
    }
    if (isBasics2) {
        BasicPics2 = <Pack array={Basics2}/>
    }
    if (isBasics3) {
        BasicPics3 = <Pack array={Basics3}/>
    }
    if (isBasics4) {
        BasicPics4 = <Pack array={Basics4}/>
    }
    if (isMovies) {
        MoviePics = <Pack array={Movies}/>
    }
    if (isTVShows) {
        TVShowPics  = <Pack array={TVShows}/>
    }
    if (isExotic) {
        ExoticPics = <Pack array={Exotic}/>
    }
    if (isExotic2) {
        ExoticPics = <Pack array={Exotic2}/>
    }
    if (isTown) {
        TownPics = <Pack array={Town}/>
    }
    if (isVideogames) {
        VideoGamesPics = <Pack array={VideoGames}/>
    }
    if (isBasicCountry) {
        BasicCountrryPics = <Pack array={BasicsCountry}/>
    }
    if (isEurope) {
        EuropePics = <Pack array={Europe}/>
    }
    if (isAsia) {
        AsiaPics = <Pack array={Asia}/>
    }

    return (
        <View style={styles.screen}>
            <CustomHeader onClick={goToStart}>end game</CustomHeader>
            <ScrollView>
            {BasicPics}
            {BasicPics2}
            {BasicPics3}
            {BasicPics4}
            {ExoticPics}
            {ExoticPics2}
            {MoviePics}
            {TownPics}
            {TVShowPics}
            {VideogamesPics}
            {BasicCountryPics}
            {AsiaPics}
            {EuropePics}
            </ScrollView>
            <View style={styles.buttons}>
                <LinearGradient colors={[ Colors.primary, Colors.primary, Colors.secondary]} style={styles.gradient}>
                    <Text style={styles.time}>{timer}</Text>
                    {TimeButton}
               </LinearGradient>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    buttons: {
    
    },
    gradient: {
        flexDirection: 'row',
        marginTop: 'auto',
        paddingHorizontal: 30,
        justifyContent: 'space-between',
        marginTop: 20,
        paddingBottom: 20,
    },
    time: {
        fontSize: 40,
    }
})

export default GameScreen;