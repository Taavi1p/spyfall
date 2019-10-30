import React from 'react';
import { Stylesheet, View, Text, ScrollView } from 'react-native';
import CustomHeader from '../components/CustomHeader';
import BasicPack from '../packs/BasicPack';
import MoviesPack from '../packs/MoviesPack';
import LocationHeader from '../components/LocationHeader';

const LocationScreen = props => {

    const goToStart = () => {
        props.navigation.navigate({routeName: 'Start'})
    }
    return (
        <View>
            <CustomHeader onClick={goToStart}>back</CustomHeader>
            <ScrollView>
                <LocationHeader>Basic</LocationHeader>
                <BasicPack />
                <LocationHeader>Movies</LocationHeader>
                <MoviesPack />
            </ScrollView>
        </View>
    )
}

export default LocationScreen