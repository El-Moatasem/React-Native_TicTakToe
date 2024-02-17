import React from 'react';
import { View, StyleSheet } from 'react-native';
import Game from './src/components/Game';

const App = () => {
  return (
    <View style={styles.appContainer}>
      <Game />
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
