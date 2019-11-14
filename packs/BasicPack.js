import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const BasicPack = () => {
    return (
        <View style={styles.container}>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/basic/airplane.png')} />
                <Text style={styles.name}>airplane</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/basic/diamond-ring.png')} />
                <Text style={styles.name}>wedding</Text>
             </View>
             <View>                
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/basic/dices.png')} />
                <Text style={styles.name}>casino</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/basic/gallery.png')} />
                <Text style={styles.name}>art gallery</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/basic/mining.png')} />
                <Text style={styles.name}>coal mine</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/basic/roller-coaster.png')} />
                <Text style={styles.name}>amusement park</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/basic/sauna.png')} />
                <Text style={styles.name}>spa</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/basic/trumpet.png')} />
                <Text style={styles.name}>jazz club</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/basic/vulture.png')} />
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
        marginBottom: 30,
    },
    name: {
        textAlign: 'center',
        marginTop: 3,
    }
})

export default BasicPack;