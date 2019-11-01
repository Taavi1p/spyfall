import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const BlackBox = props => {
    return (
        <TouchableOpacity onPress={props.onClick}>
            <View style={styles.box}>
                <View style={[styles.westBox, styles.triangle]}></View>
                <View>
                    <View style={[styles.northBox, styles.triangle]}></View>
                    <View style={[styles.southBox, styles.triangle]}></View>
                </View>
                <View style={[styles.eastBox, styles.triangle]}></View>
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
        backgroundColor: 'blue',
    },
    triangle: {
        height: 183,
        width: 183,
    },
    westBox: {
        marginTop: 38,
        marginLeft: -90,
        transform: [{ rotate: '45deg'}],
        backgroundColor: 'black',
    },
    northBox: {
        marginLeft: -53,
        marginTop: -91,
        transform: [{ rotate: '45deg'}],
        backgroundColor: 'yellow',
    },
    southBox: {
        marginLeft: -53,
        marginTop: 'auto',
        marginBottom: -90,
        transform: [{ rotate: '45deg'}],
        backgroundColor: 'green',
    },
    eastBox: {
        marginTop: 38,
        marginLeft: -54,
        transform: [{ rotate: '45deg'}],
        backgroundColor: 'orange',
    }
})

export default BlackBox;