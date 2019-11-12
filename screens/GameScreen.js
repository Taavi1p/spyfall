import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import CustomHeader from '../components/CustomHeader';
import MainButton from '../components/MainButton';
import Basics from '../packs/BasicPack';
import Basics2 from '../packs/BasicPack2';
import Basics3 from '../packs/BasicPack3';
import Basics4 from '../packs/BasicPack4';
import Exotic from '../packs/ExoticPack';
import Exotic2 from '../packs/ExoticPack2';
import Town from '../packs/TownPack';
import Movies from '../packs/MoviesPack';
import TVShows from '../packs/TVShowsPack';
import Videogames from '../packs/VideogamesPack';
// import { useSelector } from 'react-redux';
// ---------use Redux later-----------------

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
    
        //add a leading zero (as a string value) if seconds less than 10
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
    
    if (isBasics) {
        BasicPics = <Basics />
    }
    if (isBasics2) {
        BasicPics2 = <Basics2 />
    }
    if (isBasics3) {
        BasicPics3 = <Basics3 />
    }
    if (isBasics4) {
        BasicPics4 = <Basics4 />
    }
    if (isExotic) {
        ExoticPics = <Exotic />
    }
    if (isExotic2) {
        ExoticPics2 = <Exotic2 />
    }
    if (isTown) {
        TownPics = <Town />
    }
    if (isVideogames) {
        VideogamesPics = <Videogames />
    }
    if (isMovies) {
        MoviePics = <Movies />
    }
    if (isTVShows) {
        TVShowPics = <TVShows />
    }

    console.log(isMovies);
    console.log(isVideogames);


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