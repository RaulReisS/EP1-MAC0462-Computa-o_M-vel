import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { View, Text, TouchableOpacity } from 'react-native';
import * as Google from 'expo-auth-session/providers/google';
import axios from 'axios';
import { globalStyles } from '../styles/global';
import { AntDesign } from '@expo/vector-icons';
import { colors } from '../styles/colors';
import { EXPO_CLIENT_ID, WEB_CLIENT_ID } from '@env'

export default function ({ navigation }) {

    WebBrowser.maybeCompleteAuthSession();

    const [_, response, promptAsync] = Google.useAuthRequest({
        expoClientId: EXPO_CLIENT_ID,
        webClientId: WEB_CLIENT_ID,
        androidClientId: ANDROID_CLIENT_ID
    });
      
    React.useEffect(() => {
        console.log("effect response", response)
        alert(response?.type);
        if (response?.type === 'success') {
            const { authentication } = response;
            
            console.log("authentication", authentication);

            alert(authentication);

            axios.get('https://www.googleapis.com/oauth2/v2/userinfo',
                {
                    headers: {
                        Authorization: `Bearer ${authentication.accessToken}`
                    }
                }
            )
            .then((axiosResponse) => {
                alert("axios responseee!");
                navigation.navigate("Home", {
                    user: axiosResponse.data
                })
            })
            .catch((err) => {
                console.log("axiosResponseErr", err);
            });
        }
    }, [response]);

    const log = () => {
        console.log("starting google+ login")
        promptAsync();
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{marginBottom: 32, fontSize: 18}}>Faça login com Google</Text>


            <TouchableOpacity style={globalStyles.button} onPress={log}>
            <AntDesign style={{marginEnd: 16}} name="google" size={24} color={colors.TEXTWHITE_COLOR} />
                <Text style={globalStyles.buttonText}>Google+</Text>  
            </TouchableOpacity>
        </View>
    );
}