import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import BackButton from '../components/BackButton';

const CustomHeader = props => {
    return (
        <View style={styles.header}>
            <BackButton onClick={props.onClick}>{props.children}</BackButton>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 50,
    }
})

export default CustomHeader;