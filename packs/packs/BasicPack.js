import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const BasicPack = () => {
    return (
        <View style={styles.container}>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/united-states.png')} />
                <Text style={styles.name}>United States</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/canada.png')} />
                <Text style={styles.name}>Canada</Text>
             </View>
             <View>                
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/france.png')} />
                <Text style={styles.name}>France</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/germany.png')} />
                <Text style={styles.name}>Germany</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/brazil.png')} />
                <Text style={styles.name}>Brazil</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/australia.png')} />
                <Text style={styles.name}>Australia</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/russia.png')} />
                <Text style={styles.name}>Russia</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/china.png')} />
                <Text style={styles.name}>China</Text>
            </View>
             <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/japan.png')} />
                <Text style={styles.name}>Japan</Text>
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