import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const BlackBox = props => {
    return (
        <TouchableOpacity onPress={props.onClick}>
            <View style={styles.box}>
                <Text style={styles.text}>reveal</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    box: {
        height: 260,
        width: 260,
        flexDirection: 'row',
        overflow: 'hidden',
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
    }
})

export default BlackBox;