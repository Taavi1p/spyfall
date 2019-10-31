import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import { Switch } from 'react-native-switch';

const LocationHeader = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.children}</Text>
            <View style={styles.toggle}><Switch 
                value={true}
                onValueChange={(val) => console.log(val)}
                disabled={false}
                activeText={'Off'}
                inActiveText={'Off'}
                circleSize={30}
                barHeight={20}
                circleBorderWidth={3}
                backgroundActive={'blue'}
                backgroundInactive={'grey'}
                circleActiveColor={'black'}
                circleInActiveColor={'black'}
                changeValueImmediately={false} 
                innerCircleStyle={{ alignItems: "center", justifyContent: "center" }}
                outerCircleStyle={{}}
                renderActiveText={false}
                renderInActiveText={false}
                switchLeftPx={2} 
                switchRightPx={2}
                switchWidthMultiplier={2} /></View>
            <Image style={styles.image} source={require('../assets/arrow-down.png')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        backgroundColor: '#ebebeb',
        marginTop: 40,
        height: 50,
        alignItems: 'center'
    },
    text: {
        fontSize: 40,
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
        marginRight: 20,
    }
})

export default LocationHeader;