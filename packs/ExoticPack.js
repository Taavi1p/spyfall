import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const BasicPack2 = () => {
    return (
        <View style={styles.container}>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/resturant.png')} />
                <Text style={styles.name}>hawaii</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/police.png')} />
                <Text style={styles.name}>mount everest</Text>
             </View>
             <View>                
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/cemetery.png')} />
                <Text style={styles.name}>pyramids of egipt</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/party.png')} />
                <Text style={styles.name}>louvre museum</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/theatre.png')} />
                <Text style={styles.name}>colosseum</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/old.png')} />
                <Text style={styles.name}>disney land</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/book.png')} />
                <Text style={styles.name}>great wall of china</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/submarine.png')} />
                <Text style={styles.name}>taj mahal</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/satellite.png')} />
                <Text style={styles.name}>niagra falls</Text>
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