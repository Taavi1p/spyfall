import React from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import CustomHeader from '../components/CustomHeader';

const RulesScreen = props => {

    const goToStart = () => {
        props.navigation.navigate({routeName: 'Start'})
    }

    return (
        <View>
        <CustomHeader onClick={goToStart}>back</CustomHeader>
        <ScrollView>
        <View style={{paddingTop: 20, paddingBottom: 100, paddingHorizontal: 20}}>
            <Text style={{fontSize: 20}}>
                In a game of Spyfall the players find themselves in a certain location while each player gets an additional role assigned to them. At least one player is a spy who does not know the location.
                After everybody got his identity through the app, start the timer and the most suspicious looking player or last game’s spy starts by asking an arbitrary question to another player who answers that question in any way he likes. Now that player asks the next question and so forth. The player who just asked a question can no be questioned directly afterwards.
                The goal of the spy is to find out the location or survive undetected until the timer is over.
                The goal for the rest of the players is to find out who does not know the location and therefore is a spy.
                It is therefore important to be smart about the questions asked because you will want to find out if the other player is the spy while not revealing to much information to the actual spy. The spy has to use the available information to vaguely answer the questions and not get noticed.
                At any during the game a player can accuse another player of being the spy. The timer gets paused and a vote is cast. If everybody except the suspect agrees, the player’s identity is revealed. If he is the spy the players win, otherwise the actual spy wins. If no consensus is reached, the game and the timer continue.
                If during the game the spy is sure at which location the game takes place he can reveal his identity and guess. If he is right he wins, if he is wrong he looses. While the timer is paused a spy can not guess the location.
                If more than 2 spies are in the game, once a spy reveals his identity every other spy does the same and every spy can guess a separate location. If at least one is right, the spies win.
                When the timer finishes everybody has a last chance to accuse another player of being the spy. If everybody agrees on a suspect, his identity is revealed, and like before it is determined who wins. If no consent about a suspect can be achieved and everybody was able to name a suspect, the spy wins.
                The roles can be used for the role playing aspect and as a help to answer the questions.
            </Text>
            <Text style={styles.text}>Taavi Tammaru Productions</Text>
        </View>
        </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'right',
        marginTop: 20,
    }
})

export default RulesScreen;