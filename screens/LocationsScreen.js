import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import CustomHeader from '../components/CustomHeader';
import BasicPack from '../packs/BasicPack';
import MoviesPack from '../packs/MoviesPack';
import TVShowsPack from '../packs/TVShowsPack';
import LocationHeader from '../components/LocationHeader';

const LocationScreen = props => {

    const goToStart = () => {
        props.navigation.navigate({routeName: 'Start'})
    }
    return (
        <View style={styles.container}>
            <CustomHeader onClick={goToStart}>back</CustomHeader>
            <ScrollView>
                <LocationHeader>Basic</LocationHeader>
                <BasicPack />
                <LocationHeader>Movies</LocationHeader>
                <MoviesPack />
                <LocationHeader>TV Shows</LocationHeader>
                <TVShowsPack />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 70,
    }
})

export default LocationScreen