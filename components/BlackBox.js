import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const BlackBox = props => {
    return (
        <TouchableOpacity onPress={props.onClick}>
            <View style={styles.box}>
                <Text style={styles.text}>Reveal</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    box: {
        height: 250,
        width: 250,
        backgroundColor: 'black',
        justifyContent: 'center',
    }, 
    text: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
    }
})

export default BlackBox;