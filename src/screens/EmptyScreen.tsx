import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const s = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#a881af',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {fontSize: 24},
});

export function EmptyScreen() {
  return (
    <View style={s.root}>
      <Text style={s.text}> This empty screen</Text>
    </View>
  );
}
