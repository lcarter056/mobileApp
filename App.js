import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  const handlePress = () => {
    alert('Button Pressed!');
  };
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button title="Click Here" onPress ={handlePress} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
