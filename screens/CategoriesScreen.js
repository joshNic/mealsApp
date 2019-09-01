import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CategoriesScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>Categories Screen</Text>
      <Button
        title='Go to meals'
        onPress={() => props.navigation.navigate('CategoryMeals')}
      />
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

export default CategoriesScreen;
