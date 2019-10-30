import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import RulesScreen from '../screens/RulesScreen';
import StartScreen from '../screens/StartScreen';
import PickingScreen from '../screens/PickingScreen';
import GameScreen from '../screens/GameScreen';
import LocationsScreen from '../screens/LocationsScreen';



const Navigator = createStackNavigator({
    Start:{
        screen: StartScreen,
        navigationOptions: () => ({
            header: null,
          }),
    },
    Rules: {
        screen: RulesScreen,
        navigationOptions: () => ({
            header: null,
          }),
    },
    Picking: {
        screen: PickingScreen,
        navigationOptions: () => ({
            header: null,
          }),
    },
    Game: {
        screen: GameScreen,
        navigationOptions: () => ({
            header: null,
          }),
    },
    Locations: {
        screen: LocationsScreen,
        navigationOptions: () => ({
            header: null,
          }),
    },

})

export default createAppContainer(Navigator);