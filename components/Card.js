import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Colors from '../constants/Colors';
import { LinearGradient } from 'expo-linear-gradient';

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

    else if (props.location === 'Supermarket') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/supermarket.png')} />;}
    else if (props.location === 'Pirate ship') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/pirate.png')} />;}
    else if (props.location === 'University') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/university.png')} />;}
    else if (props.location === 'Ocean Liner') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/cruise.png')} />;}
    else if (props.location === 'Bank') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/bank.png')} />;}
    else if (props.location === 'Movie studio') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/movie.png')} />;}
    else if (props.location === 'Night club') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/club.png')} />;}
    else if (props.location === 'Hotel') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/hotel.png')} />;}
    else if (props.location === 'Embassy') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/embassy.png')} />;}

    else if (props.location === 'Hospital') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/hospital.png')} />;}
    else if (props.location === 'Circus Tent') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/circus.png')} />;}
    else if (props.location === 'Cat Show') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/cat.png')} />;}
    else if (props.location === 'Gaming Convention') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/gaming.png')} />;}
    else if (props.location === 'Rock Concert') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/rock.png')} />;}
    else if (props.location === 'Subway') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/train.png')} />;}
    else if (props.location === 'Basketball stadium') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/basketball.png')} />;}
    else if (props.location === 'Gas Station') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/gas.png')} />;}
    else if (props.location === 'Harbor docks') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/harbor.png')} />;}

    else if (props.location === 'Hawaii') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/hawaii.png')} />;}
    else if (props.location === 'Mount Everest') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/everest.png')} />;}
    else if (props.location === 'Pyramids of Egipt') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/pyramids.png')} />;}
    else if (props.location === 'Louvre Museum') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/louvre.png')} />;}
    else if (props.location === 'Colosseum') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/colosseum.png')} />;}
    else if (props.location === 'Disney Land') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/disneyland.png')} />;}
    else if (props.location === 'The Great Wall of China') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/great-wall.png')} />;}
    else if (props.location === 'Taj Mahal') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/taj-mahal.png')} />;}
    else if (props.location === 'Niagra Falls') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/water.png')} />;}

    else if (props.location === 'Hollywood') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/hollywood.png')} />;}
    else if (props.location === 'Burj Khalifa') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/burj-khalifa.png')} />;}
    else if (props.location === 'Las Vegas') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/las-vegas.png')} />;}
    else if (props.location === 'Eiffel Tower') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/eiffel-tower.png')} />;}
    else if (props.location === 'Times Square') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/times-square.png')} />;}
    else if (props.location === 'Buckingham Palace') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/buckingham.png')} />;}
    else if (props.location === 'Vatican City') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/vatican.png')} />;}
    else if (props.location === 'Sydney Opera House') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/sydney-opera-house.png')} />;}
    else if (props.location === 'The White House') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/white-house.png')} />;}

    else if (props.location === 'McDonalds') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/mcdonalds.png')} />;}
    else if (props.location === 'Cinema') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/movie.png')} />;}
    else if (props.location === 'Bowling hall') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/bowling.png')} />;}
    else if (props.location === 'Trampoline Park') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/trampoline.png')} />;}
    else if (props.location === 'Park') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/park.png')} />;}
    else if (props.location === 'Department Store') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/shopping-bag.png')} />;}
    else if (props.location === 'Mini Golf') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/minigolf.png')} />;}
    else if (props.location === 'Gucci store') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/gucci.png')} />;}
    else if (props.location === 'Water Park') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/slide.png')} />;}

    else if (props.location === 'Minecraft') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/minecraft.png')} />;}
    else if (props.location === 'Grand Theft Auto') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/grand-theft-auto.png')} />;}
    else if (props.location === 'Fortnite') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/fortnite.png')} />;}
    else if (props.location === 'Wii world') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/wii.png')} />;}
    else if (props.location === 'Five Nights At Freddy\'s') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/teddy-bear.png')} />;}
    else if (props.location === 'Hay Day') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/hay-day.png')} />;}
    else if (props.location === 'Sims') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/sims.png')} />;}
    else if (props.location === 'Angry Birds') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/angry-bird.png')} />;}
    else if (props.location === 'Clash of Clans') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/clash.png')} />;}

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