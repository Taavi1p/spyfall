import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import * as Animatable from 'react-native-animatable';

const Card = props => {
    let picture = <Image/>
    if (props.location === '')
    {
        picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/detective.png')} />;
    }
    else if (props.location === 'airplane') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/airplane.png')} />;}
    else if (props.location === 'wedding') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/diamond-ring.png')} />;}
    else if (props.location === 'spa') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/sauna.png')} />;}
    else if (props.location === 'zoo') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/vulture.png')} />;}
    else if (props.location === 'amusement park') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/roller-coaster.png')} />;}
    else if (props.location === 'jazz club') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/trumpet.png')} />;}
    else if (props.location === 'art museum') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/gallery.png')} />;}
    else if (props.location === 'coal mine') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/mining.png')} />;}
    else if (props.location === 'casino') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/dices.png')} />;}

    else if (props.location === 'Avengers') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/avengers.png')} />;}
    else if (props.location === 'Monsters Inc') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/monster.png')} />;}
    else if (props.location === 'Nemo') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/fish.png')} />;}
    else if (props.location === 'Titanic') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/cruise.png')} />;}
    else if (props.location === 'Shrek') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/shreky.png')} />;}
    else if (props.location === 'Harry Potter') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/golden-snitch.png')} />;}
    else if (props.location === 'Star Wars') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/death-star.png')} />;}
    else if (props.location === 'Justice League') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/batman.png')} />;}
    else if (props.location === 'Toy story') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/toys.png')} />;}

    else if (props.location === 'The Simpsons') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/bart.png')} />;}
    else if (props.location === 'The Big Bang Theory') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/big-bang-theory.png')} />;}
    else if (props.location === 'Friends') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/coffee.png')} />;}
    else if (props.location === 'Game of Thrones') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/dragon.png')} />;}
    else if (props.location === 'The Office') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/office.png')} />;}
    else if (props.location === 'Family Guy') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/peter.png')} />;}
    else if (props.location === 'How I met your mother') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/umbrella.png')} />;}
    else if (props.location === 'South Park') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/mountain.png')} />;}
    else if (props.location === 'The Walking Dead') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/zombie.png')} />;}

    return (
        <View>
            <View style={styles.card}>
                {picture}
                <Text style={styles.text}>{props.role}</Text>
                <Text style={styles.place}>{props.location}</Text>
            </View>
            <View style={styles.box}>
                <Animatable.View animation="fadeOut" duration={1000} delay={200} style={[styles.westBox, styles.triangle]}></Animatable.View>
                <View>
                    <Animatable.View animation="fadeOut" duration={1000} delay={1100} style={[styles.northBox, styles.triangle]}></Animatable.View>
                    <Animatable.View animation="fadeOut" duration={1000} delay={2600} style={[styles.southBox, styles.triangle]}></Animatable.View>
                </View>
                <Animatable.View animation="fadeOut" duration={1000} delay={1900} style={[styles.eastBox, styles.triangle]}></Animatable.View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        height: 260,
        width: 260,
        borderWidth: 4,
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
    },
    place: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    image: {
        height: 100,
        width: 100,
        marginBottom: 10,
    },
    box: {
        height: 260,
        width: 260,
        flexDirection: 'row',
        overflow: 'hidden',
        marginTop: -260
    },
    triangle: {
        height: 183,
        width: 183,
        backgroundColor: 'black'
    },
    westBox: {
        marginTop: 38,
        marginLeft: -90,
        transform: [{ rotate: '45deg'}],
    },
    northBox: {
        marginLeft: -53,
        marginTop: -91,
        transform: [{ rotate: '45deg'}],
    },
    southBox: {
        marginLeft: -53,
        marginTop: 'auto',
        marginBottom: -90,
        transform: [{ rotate: '45deg'}],
    },
    eastBox: {
        marginTop: 38,
        marginLeft: -54,
        transform: [{ rotate: '45deg'}],
    }
})

export default Card;