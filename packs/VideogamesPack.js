import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Videogames = () => {
    return (
        <View style={styles.container}>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/videogames/minecraft.png')} />
                <Text style={styles.name}>minecraft</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/videogames/grand-theft-auto.png')} />
                <Text style={styles.name}>grand theft auto</Text>
             </View>
             <View>                
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/videogames/fortnite.png')} />
                <Text style={styles.name}>fortnite</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/videogames/wii.png')} />
                <Text style={styles.name}>wii sport</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/videogames/teddy-bear.png')} />
                <Text style={styles.name}>five nights at freddys</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/videogames/hay-day.png')} />
                <Text style={styles.name}>hay day</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/videogames/sims.png')} />
                <Text style={styles.name}>sims</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/videogames/angry-bird.png')} />
                <Text style={styles.name}>angry birds</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/videogames/clash.png')} />
                <Text style={styles.name}>clash of clans</Text>
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

export default Videogames;