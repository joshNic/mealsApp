import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CategoryMealScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>Category Meal Screen</Text>
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
export default CategoryMealScreen;
