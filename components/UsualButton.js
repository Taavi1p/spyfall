import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const UsualButton = props => {
    return (
        <TouchableOpacity onPress={props.onClick}>
            <View style={styles.button}>
                <Text style={styles.text}>{props.children}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#5e5e5e',
        paddingVertical: 7,
        paddingHorizontal: 20,
        borderRadius: 7,
        marginTop: 20
    },
    text: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'avenir-heavy'
    },
})

export default UsualButton;