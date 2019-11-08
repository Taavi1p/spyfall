import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const BasicPack2 = () => {
    return (
        <View style={styles.container}>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/resturant.png')} />
                <Text style={styles.name}>hospital</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/police.png')} />
                <Text style={styles.name}>circus tent</Text>
             </View>
             <View>                
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/cemetery.png')} />
                <Text style={styles.name}>cat show</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/party.png')} />
                <Text style={styles.name}>gaming convention</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/theatre.png')} />
                <Text style={styles.name}>rock concert</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/old.png')} />
                <Text style={styles.name}>subway</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/book.png')} />
                <Text style={styles.name}>basketball stadium</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/submarine.png')} />
                <Text style={styles.name}>gas station</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/satellite.png')} />
                <Text style={styles.name}>harbor docks</Text>
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