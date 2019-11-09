import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Exotic2 = () => {
    return (
        <View style={styles.container}>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/hollywood.png')} />
                <Text style={styles.name}>hollywood</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/burj-khalifa.png')} />
                <Text style={styles.name}>burj khalifa</Text>
             </View>
             <View>                
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/las-vegas.png')} />
                <Text style={styles.name}>las vegas</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/eiffel-tower.png')} />
                <Text style={styles.name}>eiffel tower</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/times-square.png')} />
                <Text style={styles.name}>times square</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/buckingham.png')} />
                <Text style={styles.name}>buckingham palace</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/vatican.png')} />
                <Text style={styles.name}>vatican city</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/sydney-opera-house.png')} />
                <Text style={styles.name}>sydney opera house</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/white-house.png')} />
                <Text style={styles.name}>the white house</Text>
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

export default Exotic2;