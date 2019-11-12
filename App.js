import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './navigation/Navigator';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import packsReducer from './store/packs';
import  * as Font from 'expo-font';
import { AppLoading } from 'expo';

const fetchFonts = () => {
  Font.loadAsync({
    'avenir-heavy': require('./assets/fonts/avenir-heavy.ttf')
  })
}

const rootReducer = combineReducers({
  packs: packsReducer
});

const store = createStore(rootReducer);

export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return <AppLoading startAsync={fetchFonts} onFinish={() => setFontLoaded(true)} />
  }

  return (
    <Provider store={store}><Navigator style={styles.app} /></Provider>
  );
}

const styles = StyleSheet.create({
  app:{
    fontFamily: 'avenir-heavy',
  }
});
