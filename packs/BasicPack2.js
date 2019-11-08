import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const BasicPack2 = () => {
    return (
        <View style={styles.container}>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/resturant.png')} />
                <Text style={styles.name}>resturant</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/police.png')} />
                <Text style={styles.name}>police station</Text>
             </View>
             <View>                
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/cemetery.png')} />
                <Text style={styles.name}>cemetery</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/party.png')} />
                <Text style={styles.name}>corporate party</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/theatre.png')} />
                <Text style={styles.name}>theatre</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/old.png')} />
                <Text style={styles.name}>Retirement Home</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/book.png')} />
                <Text style={styles.name}>Library</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/submarine.png')} />
                <Text style={styles.name}>Submarine</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/satellite.png')} />
                <Text style={styles.name}>Space Station</Text>
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