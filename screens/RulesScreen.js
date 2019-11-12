import React from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import CustomHeader from '../components/CustomHeader';
import Colors from '../constants/Colors';

const RulesScreen = props => {

    const goToStart = () => {
        props.navigation.navigate({routeName: 'Start'})
    }

    return (
        <View>
        <CustomHeader onClick={goToStart}>back</CustomHeader>
        <ScrollView>
        <View style={{paddingTop: 20, paddingBottom: 100, paddingHorizontal: 20}}>
            <Text style={styles.header}> 1. Start of the game</Text>
            <View style={styles.line}></View>
            <Text style={styles.text}>
                In a game of Spyfall the players find themselves in a certain location while each player gets an additional role assigned to them. At least one player is a spy who does not know the location of the group.
            </Text>
            <Text style={styles.text}>
                The roles can be used for the role playing aspect and as a help to answer the questions.
            </Text>
            <Text style={styles.text}>
                After everybody got their identity through the app, start the timer and the youngest player or last game’s spy starts by asking an arbitrary question to another player who answers that question in any way he likes.
                Now that player asks the next question and so forth. The player who asked the last question can be questioned directly afterwards.
            </Text>
            <Text style={styles.header}> 2. During the game</Text>
            <View style={styles.line}></View>
            <Text style={styles.text}>
                The goal of the spy is to find out the location or survive undetected until the timer is over.
                The goal for the rest of the players is to find out who doesn't know the location and therefore is a spy.
            </Text>
            <Text style={styles.text}>
                It is therefore important to be smart about the questions asked because you will want to find out if the other player is the spy while not revealing to much information to the actual spy. The spy has to use the available information to vaguely answer the questions and not get noticed.
            </Text>
            <Text style={styles.text}>
                At any time during the game a player can accuse another player of being the spy. The timer gets paused and a vote is cast. If everybody except the suspect agrees, the player’s identity is revealed. If he is the spy the players win, otherwise the actual spy wins. If no consensus is reached, the game and the timer continue.
            </Text>
            <Text style={styles.text}>
                If at any point during the game the spy is sure where the group is located he/she can come out and make a guess. If the spy is right he wins, otherwise he loses. While the timer is paused a spy cannot guess the location.
            </Text>
            <Text style={styles.text}>
                If more than 2 spies are in the game, once a spy reveals his identity every other spy has to do the same and every spy can guess a separate location. If at least one is right, the spies win.
            </Text>
            <Text style={styles.header}> 3. End of the game</Text>
            <View style={styles.line}></View>
            <Text style={styles.text}>
                The game will end once the timer has finished. After, the spy has 5 seconds to come out and make a guess. If the spy chose not to reveal himself the players can discuss and will vote on who they think the spy is. The player who got the majority of the votes is considered the groups guess. If the group guessed correctly the group wins otherwise the spy wins.
            </Text>
            <Text style={styles.signature}>Taavi Tammaru Productions</Text>
        </View>
        </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        marginTop: 15,
    },
    header: {
        marginTop: 25,
        fontSize: 30,
        fontWeight: 'bold',
    },
    line: {
        width: '90%',
        height: 3,
        backgroundColor: Colors.secondary,
        borderRadius: 2,
    },
    signature: {
        textAlign: 'right',
        marginTop: 20,
    }
})

export default RulesScreen;