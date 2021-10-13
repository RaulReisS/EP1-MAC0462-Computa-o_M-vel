import * as React from 'react';
import { Button, View, Text, Image, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global'


export default function ({ navigation, route }) {
    console.log("aaa", route.params?.user);

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start',}}>
        <View style={globalStyles.personInfo}>
        <Text>{route.params?.user?.name}{`\n`}({route.params?.user?.email})</Text>
          <Image style={globalStyles.personImage}
          source={{uri: "https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"}}/>
        </View>

        <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 32}}>Funcionalidades</Text>
        <TouchableOpacity style={globalStyles.button} onPress={() => navigation.navigate('Clima')}>
          <Text style={globalStyles.buttonText}>Clima</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{...globalStyles.button }} onPress={() => navigation.navigate('Recipe')}>

          <Text style={globalStyles.buttonText}>Modelo</Text>
        </TouchableOpacity>
      </View>
    );
}