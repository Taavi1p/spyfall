import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Pack = props => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <View style={styles.item}>
                    <Image resizeMode='contain' style={styles.icon} source={props.array[0][2][0]} />
                    <Text style={styles.name}>{props.array[0][0]}</Text>
                </View>
                 <View style={styles.item}>
                    <Image resizeMode='contain' style={styles.icon} source={props.array[1][2][0]} />
                    <Text style={styles.name}>{props.array[1][0]}</Text>
                 </View>
                 <View style={styles.item}>                
                    <Image resizeMode='contain' style={styles.icon} source={props.array[2][2][0]} />
                    <Text style={styles.name}>{props.array[2][0]}</Text>
                </View>
            </View>
            <View style={styles.row}>
                 <View style={styles.item}>
                    <Image resizeMode='contain' style={styles.icon} source={props.array[3][2][0]} />
                    <Text style={styles.name}>{props.array[3][0]}</Text>
                </View>
                 <View style={styles.item}>
                    <Image resizeMode='contain' style={styles.icon} source={props.array[4][2][0]} />
                    <Text style={styles.name}>{props.array[4][0]}</Text>
                </View>
                 <View style={styles.item}>
                    <Image resizeMode='contain' style={styles.icon} source={props.array[5][2][0]} />
                    <Text style={styles.name}>{props.array[5][0]}</Text>
                </View>
            </View>
            <View style={styles.row}>
                 <View style={styles.item}>
                    <Image resizeMode='contain' style={styles.icon} source={props.array[6][2][0]} />
                    <Text style={styles.name}>{props.array[6][0]}</Text>
                </View>
                 <View style={styles.item}>
                    <Image resizeMode='contain' style={styles.icon} source={props.array[7][2][0]} />
                    <Text style={styles.name}>{props.array[7][0]}</Text>
                </View>
                 <View style={styles.item}>
                    <Image resizeMode='contain' style={styles.icon} source={props.array[8][2][0]} />
                    <Text style={styles.name}>{props.array[8][0]}</Text>
                </View>
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
        marginBottom: 30,
    },
    item: {
        justifyContent: 'space-between',
        width: 100,
    },
    name: {
        textAlign: 'center',
        marginTop: 3,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    }
})

export default Pack;