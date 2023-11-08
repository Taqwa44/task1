import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const App = () => {
  const [displayText, setDisplayText] = useState('');

  const displayInfo = () => {
    const name = 'Taqwa Khaled aldailwany'; // Replace with your name
    const universityID = '141536'; // Replace with your university ID
    setDisplayText(`Name: ${name}\nUniversity ID: ${universityID}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{displayText}</Text>
      <Button title="Show Info" onPress={displayInfo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default App;
