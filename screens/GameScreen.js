import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import CustomHeader from '../components/CustomHeader';
import MainButton from '../components/MainButton';
import Basics from '../packs/BasicPack';
import Basics2 from '../packs/BasicPack2';
import Movies from '../packs/MoviesPack';
import TVShows from '../packs/TVShowsPack';
// import { useSelector } from 'react-redux';
// ---------use Redux later-----------------

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
    
    let BasicPics = <View></View>;
    let MoviePics;
    let TVShowPics;
    
    if (isBasics) {
        BasicPics = <Basics />
    }
    if (isBasics2) {
        BasicPics2 = <Basics2 />
    }
    if (isMovies) {
        MoviePics = <Movies />
    }
    if (isTVShows) {
        TVShowPics = <TVShows />
    }


    return (
        <View style={styles.screen}>
            <CustomHeader onClick={goToStart}>end game</CustomHeader>
            <ScrollView>
            {BasicPics}
            {BasicPics2}
            {MoviePics}
            {TVShowPics}
            </ScrollView>
            <View style={styles.buttons}>
               <Text style={styles.time}>{timer}</Text>
               {TimeButton}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingBottom: 20,
    },
    buttons: {
        flexDirection: 'row',
        marginTop: 'auto',
        paddingHorizontal: 30,
        justifyContent: 'space-between',
        marginTop: 20,
    },
    time: {
        fontSize: 40,
    }
})

export default GameScreen;