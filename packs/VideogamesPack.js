import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const BasicPack2 = () => {
    return (
        <View style={styles.container}>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/minecraft.png')} />
                <Text style={styles.name}>minecraft</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/grand-theft-auto.png')} />
                <Text style={styles.name}>grand theft auto</Text>
             </View>
             <View>                
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/fortnite.png')} />
                <Text style={styles.name}>fortnite</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/wii.png')} />
                <Text style={styles.name}>wii sport</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/teddy-bear.png')} />
                <Text style={styles.name}>five nights at freddys</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/hay-day.png')} />
                <Text style={styles.name}>hay day</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/sims.png')} />
                <Text style={styles.name}>sims</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/amgry-bird.png')} />
                <Text style={styles.name}>angry birds</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/clash.png')} />
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

export default BasicPack2;