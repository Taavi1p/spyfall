import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const LocationHeader = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.children}</Text>
            <Button title="add" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        backgroundColor: '#ebebeb',
        marginTop: 40,
    },
    text: {
        fontSize: 30,
    }
})

export default LocationHeader;