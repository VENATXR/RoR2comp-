import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Enemies = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Здесь будут враги!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
  },
  text: {
    fontSize: 20,
    color: '#fff',
  },
});

export default Enemies;
