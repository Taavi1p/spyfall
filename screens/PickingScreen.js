import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Animated} from 'react-native';
import CustomHeader from '../components/CustomHeader';
import BlackBox from '../components/BlackBox';
import Card from '../components/Card';
import * as Animatable from 'react-native-animatable';
import { useSelector } from 'react-redux';


const PickingScreen = props => {
    const currentPacks = useSelector(state => state.packs.packs)
    const playerNumber = props.navigation.getParam('playerAmount');
    const spiesNumber = props.navigation.getParam('spyAmount');
    const [roleVisible, setRoleVisible] = useState(false);
    const [randomLocation, setRandomLocation] = useState(Math.floor(Math.random()*9));
    const [randomJob, setRandomJob] = useState(0);
    const [location, setLocation] = useState('');
    const [playerTurn, setPlayerTurn] = useState(1);
    const [firstTime, setFirstTime] = useState(true);
    const [randomRole, setRandomRole] = useState('');
    const [roleArray, setRoleArray] = useState([]);
    let number = 0;
    const [randomNumber, setRandomNumber] = useState(number);
    const [select, setSelect] = useState(true);
    const [job, setJob] = useState('');
    const [locy, setLocy] = useState('');
    const [randomPack, setRandomPack] = useState(Math.floor(Math.random()*3));


    const makeArray = () => {
        for (i = 0; i < spiesNumber; i++){
            console.log('spy');
            roleArray.push('you\'re a spy')
        }
        for (i = 0; i < playerNumber; i++){
            console.log('player');
            roleArray.push('player')
        }
        number = Math.floor(Math.random()*(roleArray.length));
        console.log(number);
    }

    if (firstTime) {
        makeArray();
        setFirstTime(false);
        
    }
    if (select)
    {
        setLocation(currentPacks[randomPack][randomLocation][0]);
        setLocy(location);
        setRandomNumber(Math.floor(Math.random()*(roleArray.length)))
        setRandomRole(roleArray[number]);
        setSelect(false);
    }

    const goToStart = () => {
        props.navigation.navigate({routeName: 'Start'})
    }
    const onReveal = () => {
        setRoleVisible(true);
        setLocation(currentPacks[randomPack][randomLocation][0]);
        setLocy(location);
        setRandomJob(Math.floor(Math.random()*(currentPacks[randomPack][randomLocation][1].length-1)));
        setRandomNumber(Math.floor(Math.random()*(roleArray.length-1)));
        setRandomRole(roleArray[randomNumber]);
        roleArray.splice(randomNumber, 1);
        console.log(roleArray);
        console.log(randomNumber);
        console.log('random role =' + randomRole)
        if (randomRole === 'player'){
            setJob(currentPacks[randomPack][randomLocation][1][randomJob])
        }
        else {
            setJob(randomRole);
            setLocy('')
        }
    }


    const onGotIt = () => {
        if (roleArray.length >= 1) {
            setRoleVisible(false);
            setPlayerTurn(playerTurn + 1);
        }
        else if (roleArray.length === 0) {
            props.navigation.navigate({routeName: 'Game'})
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