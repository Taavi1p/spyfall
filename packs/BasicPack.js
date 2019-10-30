import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const BasicPack = () => {
    return (
        <View style={styles.container}>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/airplane.png')} />
                <Text style={styles.name}>airplane</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/diamond-ring.png')} />
                <Text style={styles.name}>wedding</Text>
             </View>
             <View>                
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/dices.png')} />
                <Text style={styles.name}>casino</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/gallery.png')} />
                <Text style={styles.name}>art gallery</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/mining.png')} />
                <Text style={styles.name}>cole mine</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/roller-coaster.png')} />
                <Text style={styles.name}>amusement park</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/sauna.png')} />
                <Text style={styles.name}>spa</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/trumpet.png')} />
                <Text style={styles.name}>jazz club</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/vulture.png')} />
                <Text style={styles.name}>zoo</Text>
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
    },
    name: {
        textAlign: 'center',
        marginTop: 3,
    }
})

export default BasicPack;