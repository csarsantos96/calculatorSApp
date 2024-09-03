import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Calculator = () => {
  const [display, setDisplay] = useState('');
  const [result, setResult] = useState('');

  const handlePress = (value) => {
    if (value === '=') {
      calculateResult();
    } else if (value === 'C') {
      setDisplay('');
      setResult('');
    } else {
      setDisplay(display + value); 
    }
  };

  const calculateResult = () => {
    try {
      setResult(eval(display).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.display}>{display}</Text>
      <Text style={styles.result}>{result}</Text>
      <View style={styles.row}>
        {['7', '8', '9', '+'].map((value) => (
          <TouchableOpacity key={value} onPress={() => handlePress(value)} style={styles.button}>
            <Text style={styles.buttonText}>{value}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.row}>
        {['4', '5', '6', '-'].map((value) => (
          <TouchableOpacity key={value} onPress={() => handlePress(value)} style={styles.button}>
            <Text style={styles.buttonText}>{value}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.row}>
        {['1', '2', '3', '*'].map((value) => (
          <TouchableOpacity key={value} onPress={() => handlePress(value)} style={styles.button}>
            <Text style={styles.buttonText}>{value}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.row}>
        {['C', '0', '=', '/'].map((value) => (
          <TouchableOpacity key={value} onPress={() => handlePress(value)} style={styles.button}>
            <Text style={styles.buttonText}>{value}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  display: {
    fontSize: 32,
    width: '90%',
    textAlign: 'right',
    marginBottom: 10,
  },
  result: {
    fontSize: 24,
    width: '90%',
    textAlign: 'right',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#f0f0f0',
    padding: 20,
    margin: 5,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 24,
  },
});

export default Calculator;
