import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Calculator from './components/calculator'; // Importe o componente Calculator

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Use o componente Calculator */}
      <Calculator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
