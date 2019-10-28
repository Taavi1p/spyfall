import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { Feather} from '@expo/vector-icons';

const InputButton = props => {
    return (
            <View style={styles.buttons}>
                <TouchableOpacity onPress={props.substract}><View style={[styles.icon, styles.left]}><Feather name="minus" size={30} color="white" /></View></TouchableOpacity>
                <TouchableOpacity onPress={props.add}><View style={[styles.icon, styles.right]}><Feather name="plus" size={30} color="white" /></View></TouchableOpacity>
            </View>
    )
}

const styles = StyleSheet.create({
    buttons: {
        flexDirection: 'row',
        borderRadius: 5,
        overflow: 'hidden',
    },
    left: {
        borderRightColor: 'white',
        borderRightWidth: 1,
    },
    right: {
        borderLeftColor: 'white',
        borderRightWidth: 1,
    },
    icon: {
        backgroundColor: 'black',
        height: 30,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default InputButton;