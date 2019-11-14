import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const TVShowsPack = () => {
    return (
        <View style={styles.container}>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/tvshows/bart.png')} />
                <Text style={styles.name}>The Simpsons</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/tvshows/big-bang-theory.png')} />
                <Text style={styles.name}>Big Bang Theory</Text>
             </View>
             <View>                
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/tvshows/coffee.png')} />
                <Text style={styles.name}>Friends</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/tvshows/dragon.png')} />
                <Text style={styles.name}>Game of Thrones</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/tvshows/office.png')} />
                <Text style={styles.name}>The Office</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/tvshows/peter.png')} />
                <Text style={styles.name}>Family Guy</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/tvshows/umbrella.png')} />
                <Text style={styles.name}>How I met your mother</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/tvshows/mountain.png')} />
                <Text style={styles.name}>South Park</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/tvshows/zombie.png')} />
                <Text style={styles.name}>Walking Dead</Text>
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
        marginBottom: 50,
    },
    name: {
        textAlign: 'center',
        marginTop: 3,
        maxWidth: 100,
    }
})

export default TVShowsPack;