import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const BackButton = props => {
    return (
        <TouchableOpacity style={{marginTop: 'auto'}} onPress={props.onClick} >
            <View style={styles.container}>
                <Text style={styles.text}>{props.children}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        color: 'black',
    },
    container: {
        paddingHorizontal: 10,
    }
})

export default BackButton;