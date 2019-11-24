import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const EuropePack = () => {
    return (
        <View style={styles.container}>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/united-kingdom.png')} />
                <Text style={styles.name}>United Kingdom</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/italy.png')} />
                <Text style={styles.name}>Italy</Text>
             </View>
             <View>                
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/spain.png')} />
                <Text style={styles.name}>Spain</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/greece.png')} />
                <Text style={styles.name}>Greece</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/norway.png')} />
                <Text style={styles.name}>Norway</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/ukraine.png')} />
                <Text style={styles.name}>Ukraine</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/switzerland.png')} />
                <Text style={styles.name}>Switzerland</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/ireland.png')} />
                <Text style={styles.name}>Ireland</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/finland.png')} />
                <Text style={styles.name}>Finland</Text>
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

export default EuropePack;