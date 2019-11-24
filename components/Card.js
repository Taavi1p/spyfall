import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Colors from '../constants/Colors';
import { LinearGradient } from 'expo-linear-gradient';

const Card = props => {
    let picture;
    if (props.location === '')
    {
        picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/detective.png')} />;
    }
    else {
        picture = <Image resizeMode='contain' style={styles.image} source={require({})} />;
    }

    return (
        <View>
            <View style={styles.card}>
                {picture}
                <Text style={styles.text}>{props.role}</Text>
                <Text style={styles.place}>{props.location}</Text>
                <LinearGradient colors={[Colors.primary, Colors.secondary]} style={styles.gradient}></LinearGradient>
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
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    gradient: {
        marginTop: 'auto',
        height: 15,
        width: '100%',
    },
    text: {
        fontSize: 20,
    },
    place: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    image: {
        height: 100,
        width: 100,
        marginBottom: 10,
        marginTop: 'auto',
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