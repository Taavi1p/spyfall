import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const BasicPack2 = () => {
    return (
        <View style={styles.container}>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/mcdonalds.png')} />
                <Text style={styles.name}>mcdonalds</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/movie.png')} />
                <Text style={styles.name}>cinema</Text>
             </View>
             <View>                
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/bowling.png')} />
                <Text style={styles.name}>bowling hall</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/trampoline.png')} />
                <Text style={styles.name}>trampoline park</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/park.png')} />
                <Text style={styles.name}>park</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/shopping-bag.png')} />
                <Text style={styles.name}>department store</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/minigolf.png')} />
                <Text style={styles.name}>mini golf</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/gucci.png')} />
                <Text style={styles.name}>gucci store</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/slide.png')} />
                <Text style={styles.name}>water park</Text>
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