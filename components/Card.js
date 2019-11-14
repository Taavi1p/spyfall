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
    else if (props.location === 'airplane') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/basic/airplane.png')} />;}
    else if (props.location === 'wedding') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/basic/diamond-ring.png')} />;}
    else if (props.location === 'spa') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/basic/sauna.png')} />;}
    else if (props.location === 'zoo') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/basic/vulture.png')} />;}
    else if (props.location === 'amusement park') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/basic/roller-coaster.png')} />;}
    else if (props.location === 'jazz club') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/basic/trumpet.png')} />;}
    else if (props.location === 'art museum') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/basic/gallery.png')} />;}
    else if (props.location === 'coal mine') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/basic/mining.png')} />;}
    else if (props.location === 'casino') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/basic/dices.png')} />;}

    else if (props.location === 'resturant') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/basic2/resturant.png')} />;}
    else if (props.location === 'police station') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/basic2/police.png')} />;}
    else if (props.location === 'Cemetery') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/basic2/cemetery.png')} />;}
    else if (props.location === 'Corporate Party') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/basic2/party.png')} />;}
    else if (props.location === 'Theatre') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/basic2/theatre.png')} />;}
    else if (props.location === 'Retirement Home') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/basic2/old.png')} />;}
    else if (props.location === 'Library') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/basic2/book.png')} />;}
    else if (props.location === 'Submarine') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/basic2/submarine.png')} />;}
    else if (props.location === 'Space Station') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/basic2/satellite.png')} />;}

    else if (props.location === 'Avengers') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/movies/avengers.png')} />;}
    else if (props.location === 'Monsters Inc') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/movies/monster.png')} />;}
    else if (props.location === 'Nemo') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/movies/fish.png')} />;}
    else if (props.location === 'Titanic') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/movies/cruise.png')} />;}
    else if (props.location === 'Shrek') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/movies/shreky.png')} />;}
    else if (props.location === 'Harry Potter') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/movies/golden-snitch.png')} />;}
    else if (props.location === 'Star Wars') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/movies/death-star.png')} />;}
    else if (props.location === 'Justice League') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/movies/batman.png')} />;}
    else if (props.location === 'Toy story') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/movies/toys.png')} />;}

    else if (props.location === 'The Simpsons') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/tvshows/bart.png')} />;}
    else if (props.location === 'The Big Bang Theory') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/tvshows/big-bang-theory.png')} />;}
    else if (props.location === 'Friends') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/tvshows/coffee.png')} />;}
    else if (props.location === 'Game of Thrones') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/tvshows/dragon.png')} />;}
    else if (props.location === 'The Office') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/tvshows/office.png')} />;}
    else if (props.location === 'Family Guy') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/tvshows/peter.png')} />;}
    else if (props.location === 'How I met your mother') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/tvshows/umbrella.png')} />;}
    else if (props.location === 'South Park') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/tvshows/mountain.png')} />;}
    else if (props.location === 'The Walking Dead') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/tvshows/zombie.png')} />;}

    else if (props.location === 'Supermarket') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/basic3/supermarket.png')} />;}
    else if (props.location === 'Pirate ship') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/basic3/pirate.png')} />;}
    else if (props.location === 'University') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/basic3/university.png')} />;}
    else if (props.location === 'Ocean Liner') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/basic3/cruise.png')} />;}
    else if (props.location === 'Bank') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/basic3/bank.png')} />;}
    else if (props.location === 'Movie studio') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/basic3/movie.png')} />;}
    else if (props.location === 'Night club') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/basic3/club.png')} />;}
    else if (props.location === 'Hotel') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/basic3/hotel.png')} />;}
    else if (props.location === 'Embassy') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/basic3/embassy.png')} />;}

    else if (props.location === 'Hospital') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/basic4/hospital.png')} />;}
    else if (props.location === 'Circus Tent') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/basic4/circus.png')} />;}
    else if (props.location === 'Cat Show') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/basic4/cat.png')} />;}
    else if (props.location === 'Gaming Convention') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/basic4/gaming.png')} />;}
    else if (props.location === 'Rock Concert') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/basic4/rock.png')} />;}
    else if (props.location === 'Subway') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/basic4/train.png')} />;}
    else if (props.location === 'Basketball stadium') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/basic4/basketball.png')} />;}
    else if (props.location === 'Gas Station') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/basic4/gas.png')} />;}
    else if (props.location === 'Harbor docks') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/basic4/harbor.png')} />;}

    else if (props.location === 'Hawaii') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/exotic/hawaii.png')} />;}
    else if (props.location === 'Mount Everest') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/exotic/everest.png')} />;}
    else if (props.location === 'Pyramids of Egipt') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/exotic/pyramids.png')} />;}
    else if (props.location === 'Louvre Museum') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/exotic/louvre.png')} />;}
    else if (props.location === 'Colosseum') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/exotic/colosseum.png')} />;}
    else if (props.location === 'Disney Land') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/exotic/disneyland.png')} />;}
    else if (props.location === 'The Great Wall of China') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/exotic/great-wall.png')} />;}
    else if (props.location === 'Taj Mahal') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/exotic/taj-mahal.png')} />;}
    else if (props.location === 'Niagra Falls') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/exotic/water.png')} />;}

    else if (props.location === 'Hollywood') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/exotic2/hollywood.png')} />;}
    else if (props.location === 'Burj Khalifa') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/exotic2/burj-khalifa.png')} />;}
    else if (props.location === 'Las Vegas') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/exotic2/las-vegas.png')} />;}
    else if (props.location === 'Eiffel Tower') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/exotic2/eiffel-tower.png')} />;}
    else if (props.location === 'Times Square') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/exotic2/times-square.png')} />;}
    else if (props.location === 'Buckingham Palace') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/exotic2/buckingham.png')} />;}
    else if (props.location === 'Vatican City') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/exotic2/vatican.png')} />;}
    else if (props.location === 'Sydney Opera House') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/exotic2/sydney-opera-house.png')} />;}
    else if (props.location === 'The White House') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/exotic2/white-house.png')} />;}

    else if (props.location === 'McDonalds') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/town/mcdonalds.png')} />;}
    else if (props.location === 'Cinema') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/town/movie-tickets.png')} />;}
    else if (props.location === 'Bowling hall') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/town/bowling.png')} />;}
    else if (props.location === 'Trampoline Park') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/town/trampoline.png')} />;}
    else if (props.location === 'Park') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/town/park.png')} />;}
    else if (props.location === 'Department Store') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/town/shopping-bag.png')} />;}
    else if (props.location === 'Mini Golf') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/town/minigolf.png')} />;}
    else if (props.location === 'Gucci store') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/town/gucci.png')} />;}
    else if (props.location === 'Water Park') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/town/slide.png')} />;}

    else if (props.location === 'Minecraft') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/videogames/minecraft.png')} />;}
    else if (props.location === 'Grand Theft Auto') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/videogames/grand-theft-auto.png')} />;}
    else if (props.location === 'Fortnite') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/videogames/fortnite.png')} />;}
    else if (props.location === 'Wii world') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/videogames/wii.png')} />;}
    else if (props.location === 'Five Nights At Freddy\'s') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/videogames/teddy-bear.png')} />;}
    else if (props.location === 'Hay Day') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/videogames/hay-day.png')} />;}
    else if (props.location === 'Sims') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/videogames/sims.png')} />;}
    else if (props.location === 'Angry Birds') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/videogames/angry-bird.png')} />;}
    else if (props.location === 'Clash of Clans') {picture = <Image resizeMode='contain' style={styles.image} source={require('../assets/videogames/clash.png')} />;}

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