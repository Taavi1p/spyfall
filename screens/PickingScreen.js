import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Animated} from 'react-native';
import CustomHeader from '../components/CustomHeader';
import BlackBox from '../components/BlackBox';
import Card from '../components/Card';
import * as Animatable from 'react-native-animatable';

const options = [
[
    'airplane',
    [ 'pilot', 'co-pilot', 'flight attendant', 'engineer', 'First-class passenger', 'economy-class passenger'],
    ['../assets/airplane.png']
],
[
    'wedding',
    [ 'ring bearer', 'Father of the bride', 'Groom', 'photographer', 'best man', 'flower girl', 'bride', 'wedding chrasher', 'relative' ],
    ['../assets/diamond-ring.png']
],
[
    'spa',
    [ 'nail specialist', 'masseur', 'life guard', 'receptionist', 'customer'  ],
    ['../assets/sauna.png']
],
[
    'zoo',
    [ 'zookeeper', 'food vendor', 'photographer', 'cashier', 'researcher', 'veterinarian', 'child', 'visitor', 'tourist' ],
    ['../assets/vulture.png']
],
[
    'amusement park',
    [ 'cashier', 'janitor', 'food vendor', 'ride operator', 'security guard', 'annoying child', 'teenager', 'parent', 'happy child' ],
    ['../assets/roller-coaster.png']
],
[
    'jazz club',
    ['pianist', 'drummer', 'saxophonist', 'dancer', 'bouncer', 'barman', 'vip', 'jazz fanatic'],
    ['../assets/trumpet.png']
],
[
    'art museum',
    [ 'security guard', 'photographer', 'teacher', 'ticket seller', 'art critic', 'painter', 'art collector', 'visitor', 'student', 'tourist' ],
    ['../assets/gallery.png']
],
[
    'coal mine',
    [ 'blasting engineer', 'soild waste engineer', 'dump truck operator', 'overseer', 'safety inspector', 'worker',  'coordinator', 'driller', 'miner'  ],
    ['../assets/mining.png']
],
[
    'casino',
    [ 'bartender', 'administrator', 'head of security', 'administrator', 'bouncer','dealer', 'gambler' ],
    ['../assets/dices.png']
]]


const PickingScreen = props => {
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
    const [randomNumber, setRandomNumber] = useState(2);
    const [select, setSelect] = useState(true);
    const [job, setJob] = useState('');
    const [locy, setLocy] = useState('');

    const makeArray = () => {
        for (i = 0; i < spiesNumber; i++){
            console.log('spy');
            roleArray.push('you\'re a spy')
        }
        for (i = 0; i < playerNumber; i++){
            console.log('player');
            roleArray.push('player')
        }
    }

    if (firstTime) {
        makeArray();
        setFirstTime(false);
    }
    if (select)
    {
        setLocation(options[randomLocation][0]);
        setLocy(location);
        setRandomNumber(Math.floor(Math.random()*(roleArray.length)))
        setRandomRole(roleArray[randomNumber]);
        setSelect(false);
        console.log('random location ' + randomLocation);
    }

    const goToStart = () => {
        props.navigation.navigate({routeName: 'Start'})
    }
    const onReveal = () => {
        console.log(roleArray);
        setRoleVisible(true);
        setLocation(options[randomLocation][0]);
        setLocy(location);
        setRandomJob(Math.floor(Math.random()*(options[randomLocation][1].length-1)));
        setRandomNumber(Math.floor(Math.random()*(roleArray.length-1)));
        setRandomRole(roleArray[randomNumber]);
        roleArray.splice(randomNumber, 1);
        if (randomRole === 'player'){
            setJob(options[randomLocation][1][randomJob])
        }
        else {
            setJob(randomRole);
            setLocy('')
        }
        console.log('random location ' + randomLocation);
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