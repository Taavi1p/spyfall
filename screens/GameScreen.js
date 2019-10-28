import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import CustomHeader from '../components/CustomHeader';
import MainButton from '../components/MainButton';

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
             <View style={styles.container}>
                 <View>
                    <Image resizeMode='contain' style={styles.icon} source={require('../assets/airplane.png')} />
                    <Text style={styles.name}>airplane</Text>
                </View>
                 <View>
                    <Image resizeMode='contain' style={styles.icon} source={require('../assets/diamond-ring.png')} />
                    <Text style={styles.name}>wedding</Text>
                 </View>
                 <View>                
                    <Image resizeMode='contain' style={styles.icon} source={require('../assets/dices.png')} />
                    <Text style={styles.name}>casino</Text>
                </View>
                 <View>
                    <Image resizeMode='contain' style={styles.icon} source={require('../assets/gallery.png')} />
                    <Text style={styles.name}>art gallery</Text>
                </View>
                 <View>
                    <Image resizeMode='contain' style={styles.icon} source={require('../assets/mining.png')} />
                    <Text style={styles.name}>cole mine</Text>
                </View>
                 <View>
                    <Image resizeMode='contain' style={styles.icon} source={require('../assets/roller-coaster.png')} />
                    <Text style={styles.name}>amusement park</Text>
                </View>
                 <View>
                    <Image resizeMode='contain' style={styles.icon} source={require('../assets/sauna.png')} />
                    <Text style={styles.name}>spa</Text>
                </View>
                 <View>
                    <Image resizeMode='contain' style={styles.icon} source={require('../assets/trumpet.png')} />
                    <Text style={styles.name}>jazz club</Text>
                </View>
                 <View>
                    <Image resizeMode='contain' style={styles.icon} source={require('../assets/vulture.png')} />
                    <Text style={styles.name}>zoo</Text>
                </View>
             </View>
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
    icon: {
        height: 80,
        width: 80,
        marginTop: 30,
        marginHorizontal: 10,
    },
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: "space-evenly",
    },
    buttons: {
        flexDirection: 'row',
        marginTop: 'auto',
        justifyContent: 'space-evenly',
    },
    time: {
        fontSize: 40,
    },
    name: {
        textAlign: 'center',
        marginTop: 3,
    }
})

export default GameScreen;