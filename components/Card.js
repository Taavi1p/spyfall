import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

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

    return (
        <View style={styles.card}>
            {picture}
            <Text style={styles.text}>{props.role}</Text>
            <Text style={styles.place}>{props.location}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        height: 250,
        width: 250,
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
    }
})

export default Card;