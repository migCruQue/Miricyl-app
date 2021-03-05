import * as React from 'react';
import { StyleSheet } from 'react-native';

import Card from '../../components/Card';
import { Text, View } from '../../components/Themed';

export default function JoyImportScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add some joyful content...</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Card></Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});