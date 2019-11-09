import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const BasicPack3 = () => {
    return (
        <View style={styles.container}>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/supermarket.png')} />
                <Text style={styles.name}>supermarket</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/pirate.png')} />
                <Text style={styles.name}>pirate ship</Text>
             </View>
             <View>                
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/university.png')} />
                <Text style={styles.name}>university</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/cruise.png')} />
                <Text style={styles.name}>ocean liner</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/bank.png')} />
                <Text style={styles.name}>bank</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/movie.png')} />
                <Text style={styles.name}>movie studio</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/club.png')} />
                <Text style={styles.name}>night club</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/hotel.png')} />
                <Text style={styles.name}>hotel</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/embassy.png')} />
                <Text style={styles.name}>embassy</Text>
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

export default BasicPack3;