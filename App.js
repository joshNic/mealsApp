import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { Apploading } from 'expo';

const fetchFonts = async () => {
  const loadFont = await Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
  return loadFont;
};

export default function App() {
  const [fontLoaded, setfontLoaded] = useState(false);
  if (!fontLoaded) {
    return (
      <Apploading
        startAsync={fetchFonts}
        onFinish={() => setfontLoaded(true)}
      />
    );
  }
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
