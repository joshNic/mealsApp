import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FavouriteScreen = props => {
  return (
    <View style={styles.screen}>
      <Text> Favourite Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center'
  }
});

export default FavouriteScreen;
