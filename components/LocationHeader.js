import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { Switch } from 'react-native-switch';

const LocationHeader = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.children}</Text>
            <View style={styles.toggle}><Switch 
                value={props.value}
                onValueChange={(val) => console.log(val)}
                disabled={false}
                activeText={'Off'}
                inActiveText={'Off'}
                circleSize={25}
                barHeight={20}
                circleBorderWidth={0}
                backgroundActive={'blue'}
                backgroundInactive={'grey'}
                circleActiveColor={'white'}
                circleInActiveColor={'white'}
                changeValueImmediately={false} 
                innerCircleStyle={{ alignItems: "center", justifyContent: "center" }}
                outerCircleStyle={{}}
                renderActiveText={false}
                renderInActiveText={false}
                switchLeftPx={2} 
                switchRightPx={2}
                switchWidthMultiplier={2} /></View>
            <View style={styles.clickArea}>
                <TouchableOpacity onPress={props.onClick}>
                    <Image style={styles.image} source={require('../assets/arrow-down.png')} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingLeft: 10,
        backgroundColor: '#ebebeb',
        height: 50,
        alignItems: 'center'
    },
    text: {
        fontSize: 30,
        lineHeight: 50,
        textAlignVertical: 'center',
    },
    toggle: {
        marginLeft: 20,
    },
    image: {
        height: 30,
        width: 30,
        marginLeft: 'auto',
    },
    clickArea: {
        height: '100%',
        justifyContent: 'center',
        paddingRight: 20,
        flex: 1,
    }
})

export default LocationHeader;