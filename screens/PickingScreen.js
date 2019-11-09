import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Animated} from 'react-native';
import CustomHeader from '../components/CustomHeader';
import BlackBox from '../components/BlackBox';
import Card from '../components/Card';
import * as Animatable from 'react-native-animatable';
import Basics from '../data/basics';
import Basics2 from '../data/basics2';
import Basics3 from '../data/basics3';
import Basics4 from '../data/basics4';
import Exotic from '../data/exotic';
import Exotic2 from '../data/exotic2';
import Movies from '../data/movies';
import Town from '../data/town';
import TVShows from '../data/tvshows';
import Videogames from '../data/videogames';
// import { useSelector } from 'react-redux';
// ------------use redux later---------------

const PickingScreen = props => {
    // const currentPacks = useSelector(state => state.packs.packs)
    const playerNumber = props.navigation.getParam('playerAmount');
    const spiesNumber = props.navigation.getParam('spyAmount');
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
    const [roleVisible, setRoleVisible] = useState(false);
    const [randomLocation, setRandomLocation] = useState(Math.floor(Math.random()*9));
    const [location, setLocation] = useState('');
    const [playerTurn, setPlayerTurn] = useState(1);
    const [roleArray, setRoleArray] = useState([]);
    const [select, setSelect] = useState(true);
    const [job, setJob] = useState('');
    const [locy, setLocy] = useState('');
    const [locationArray, setLocationArray] = useState([]);
    const [randomPack, setRandomPack] = useState(Math.floor(Math.random()*(locationArray.length + 1)));

    // console.log(isBasics)
    // console.log(isMovies)
    // console.log(isTVShows)
    // console.log('---------PickingScreen------')

    const makeArray = () => {
        console.log('----------New Game-------------')
        for (i = 0; i < playerNumber; i++){
            console.log('player');
            roleArray.push('player')
        }
        for (i = 0; i < spiesNumber; i++){
            console.log('spy');
            let generator = Math.floor(Math.random()*(roleArray.length + 1));
            roleArray.splice(generator, 0, 'spy')
        }
        console.log(roleArray);
        
        if (isBasics) {
            locationArray.push(Basics)
        }
        if (isBasics2) {
            locationArray.push(Basics2)
        }
        if (isBasics3) {
            locationArray.push(Basics3)
        }
        if (isBasics4) {
            locationArray.push(Basics4)
        }
        if (isExotic) {
            locationArray.push(Exotic)
        }
        if (isExotic2) {
            locationArray.push(Exotic2)
        }
        if (isMovies) {
            locationArray.push(Movies)
        }
        if (isTown) {
            locationArray.push(Town)
        }
        if (isTVShows) {
            locationArray.push(TVShows)
        }
        if (isVideogames) {
            locationArray.push(Videogames)
        }
    }

    if (select)
    {
        makeArray();
        setLocation(locationArray[randomPack][randomLocation][0]);
        setLocy(location);
        setSelect(false);
    }

    const onReveal = () => {
        setRoleVisible(true);
        setLocation(locationArray[randomPack][randomLocation][0]);
        setLocy(location);
        setJob(locationArray[randomPack][randomLocation][1][Math.floor(Math.random()*(locationArray[randomPack][randomLocation][1].length-1))]);
        
        if (roleArray[0] === 'spy'){
            setJob('you\'re the spy');
            setLocy('')
        }

        roleArray.shift();
    }

    const goToStart = () => {
        props.navigation.navigate({routeName: 'Start'})
    }

    const onGotIt = () => {
        if (roleArray.length >= 1) {
            setRoleVisible(false);
            setPlayerTurn(playerTurn + 1);
        }
        else if (roleArray.length === 0) {
            props.navigation.navigate({routeName: 'Game', params: {
                isBasics: isBasics, isBasics2: isBasics2, isMovies: isMovies, isTVShows: isTVShows,
                isExotic: isExotic, isExotic2: isExotic2, isTown: isTown, isVideogames: isVideogames,
                isBasics3: isBasics3, isBasics4: isBasics4,

            }})
        }
    }

    let Content = <BlackBox onClick={onReveal} />;
    let gotIt = <Animatable.View animation="fadeIn" duration={2200} delay={2400} style={{width: '100%', height: 60}}></Animatable.View>;
    
    if (roleVisible === true ){
        Content = <Card role={job} location={locy} />;
        gotIt = <TouchableOpacity onPress={onGotIt}><View style={styles.box}><Text style={styles.boxText}>got it</Text></View></TouchableOpacity>;
    }
    else if (roleVisible === false){
        Content = <BlackBox onClick={onReveal} />;
        gotIt = <Animatable.View animation="fadeIn" duration={2200} delay={2400} style={{width: '100%', height: 60}}></Animatable.View>
    }

    console.log(isMovies);
    console.log(isVideogames);

    return (
        <View style={{flex: 1}}>
            <CustomHeader onClick={goToStart}>cancel game</CustomHeader>
            <View style={styles.container}>
            <Text style={styles.player}>player {playerTurn}</Text>
            {Content}</View>
            {gotIt}
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    box: {
        width: '100%',
        height: 60,
        backgroundColor: 'black',
    },
    boxText: {
        fontSize: 40,
        color: 'white',
        textAlign: 'center',
    },
    player: {
        marginBottom: 30,
        fontSize: 25,
    }
})

export default PickingScreen;