import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import CustomHeader from '../components/CustomHeader';
import MainButton from '../components/MainButton';
import Basics from '../packs/BasicPack';
import Movies from '../packs/MoviesPack';
import TVShows from '../packs/TVShowsPack';
// import { useSelector } from 'react-redux';
// ---------use Redux later-----------------

const GameScreen = props => {
    const goToStart = () => {
        props.navigation.navigate({routeName: 'Start'})
    }
    const isBasics = props.navigation.getParam('isBasics');
    const isMovies = props.navigation.getParam('isMovies');
    const isTVShows = props.navigation.getParam('isTVShows');
    // const isBasics = useSelector(state => state.packs.isBasics);
    // const isMovies = useSelector(state => state.packs.isMovies);
    // const isTVShows = useSelector(state => state.packs.isTVShows);
    let intervally;
    const [timer, setTimer] = useState('8:00');
    let time = 479;
    const tick = () => {
        console.log(time);
    
        let min = Math.floor(time / 60);
        let sec = time - (min * 60);
    
        //add a leading zero (as a string value) if seconds less than 10
        if (sec < 10) {
            sec = "0" + sec;
        }

        if (min === 0 && sec == '00'){
            console.log('clear');
            clearInterval(intervally)
        }
    
        setTimer(min.toString() + ':' + sec.toString());
        time--;
    
    }

    console.log(isBasics)
    console.log(isMovies)
    console.log(isTVShows)

    const startClock = () => {
        console.log('hahaha');
        intervally = setInterval(tick, 1000);
    }
    let BasicPics = <View></View>;
    let MoviePics;
    let TVShowPics;
    
    if (isBasics) {
        BasicPics = <Basics />
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
            {MoviePics}
            {TVShowPics}
            </ScrollView>
            <View style={styles.buttons}>
               <Text style={styles.time}>{timer}</Text>
                <MainButton onClick={startClock}>Start Timer</MainButton>
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
        justifyContent: 'space-evenly',
        marginTop: 20,
    },
    time: {
        fontSize: 40,
    }
})

export default GameScreen;