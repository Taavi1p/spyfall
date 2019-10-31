import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const MoviesPack = () => {
    return (
        <View style={styles.container}>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/avengers.png')} />
                <Text style={styles.name}>Avengers</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/monster.png')} />
                <Text style={styles.name}>Monsters Inc</Text>
             </View>
             <View>                
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/fish.png')} />
                <Text style={styles.name}>Nemo</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/cruise.png')} />
                <Text style={styles.name}>Titanic</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/hunger-games.png')} />
                <Text style={styles.name}>Hunger Games</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/golden-snitch.png')} />
                <Text style={styles.name}>Harry Potter</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/death-star.png')} />
                <Text style={styles.name}>Star Wars</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/batman.png')} />
                <Text style={styles.name}>Batman</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/diplodocus.png')} />
                <Text style={styles.name}>Jurassic Park</Text>
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