import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './navigation/Navigator';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import packsReducer from './store/packs';

const rootReducer = combineReducers({
  packs: packsReducer
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}><Navigator /></Provider>
  );
}

const styles = StyleSheet.create({

});
