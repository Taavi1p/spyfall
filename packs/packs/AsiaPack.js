import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const AsiaPack = () => {
    return (
        <View style={styles.container}>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/taiwan.png')} />
                <Text style={styles.name}>Taiwan</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/india.png')} />
                <Text style={styles.name}>India</Text>
             </View>
             <View>                
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/saudi-arabia.png')} />
                <Text style={styles.name}>Saudi Arabia</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/singapore.png')} />
                <Text style={styles.name}>Singapore</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/south-korea.png')} />
                <Text style={styles.name}>South Korea</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/pakistan.png')} />
                <Text style={styles.name}>Pakistan</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/hong-kong.png')} />
                <Text style={styles.name}>Hong Kong</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/vietnam.png')} />
                <Text style={styles.name}>Vietnam</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/israel.png')} />
                <Text style={styles.name}>Israel</Text>
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

export default AsiaPack;