import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const MoviesPack = () => {
    return (
        <View style={styles.container}>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/movies/avengers.png')} />
                <Text style={styles.name}>Avengers</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/movies/monster.png')} />
                <Text style={styles.name}>Monsters Inc</Text>
             </View>
             <View>                
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/movies/fish.png')} />
                <Text style={styles.name}>Nemo</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/movies/cruise.png')} />
                <Text style={styles.name}>Titanic</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/movies/shreky.png')} />
                <Text style={styles.name}>Shrek</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/movies/golden-snitch.png')} />
                <Text style={styles.name}>Harry Potter</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/movies/death-star.png')} />
                <Text style={styles.name}>Star Wars</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/movies/batman.png')} />
                <Text style={styles.name}>Justice League</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/movies/toys.png')} />
                <Text style={styles.name}>Toy Story</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    icon: {
        height: 80,
        width: 80,
        marginTop: 10,
        marginHorizontal: 10,
    },
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: "space-evenly",
        marginBottom: 30,
    },
    name: {
        textAlign: 'center',
        marginTop: 3,
    }
})

export default MoviesPack;