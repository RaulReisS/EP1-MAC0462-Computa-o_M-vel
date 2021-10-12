import * as React from 'react';
import { Button, View, Text, Image, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global'

export default function ({ navigation, route }) {
    console.log("aaa", route.params?.user);

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Olha {route.params?.user?.name} ({route.params?.user?.email})</Text>
        <Image
            style={{width: 50, height: 50}}
            source={{uri: route.params?.user?.picture}}/>

        <TouchableOpacity style={globalStyles.button} onPress={() => navigation.navigate('Clima')}>
          <Text style={globalStyles.buttonText}>Clima</Text>
        </TouchableOpacity>

        <TouchableOpacity style={globalStyles.button} onPress={() => navigation.navigate('Recipe')}>
          <Text style={globalStyles.buttonText}>Recipe</Text>
        </TouchableOpacity>


        <Button
          title="Go to Details... again"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
    );
}