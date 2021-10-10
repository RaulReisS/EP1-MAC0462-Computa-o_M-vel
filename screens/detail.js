import * as React from 'react';
import { Button, View, Text } from 'react-native';

export default function ({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    );
  }