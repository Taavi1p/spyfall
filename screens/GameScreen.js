import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import CustomHeader from '../components/CustomHeader';
import MainButton from '../components/MainButton';
import Pictures from '../packs/BasicPack';

const GameScreen = props => {
    const goToStart = () => {
        props.navigation.navigate({routeName: 'Start'})
    }
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

    const startClock = () => {
        console.log('hahaha');
        intervally = setInterval(tick, 1000);
    }
    return (
        <View style={styles.screen}>
            <CustomHeader onClick={goToStart}>end game</CustomHeader>
             <Pictures />
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
        paddingBottom: 40,
    },
    buttons: {
        flexDirection: 'row',
        marginTop: 'auto',
        justifyContent: 'space-evenly',
    },
    time: {
        fontSize: 40,
    }
})

export default GameScreen;