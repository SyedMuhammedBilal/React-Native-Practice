import React from 'react';
import { View } from 'react-native';
import { StyleSheet, Text } from 'react-native'
import Navigator from './Routes/homeStack'

export default function App() {
  return (
    <Navigator />
  )
};


const styles = StyleSheet.create({
  topSpacing: {
    marginTop: 50
  }
});