import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { Button, View, Text } from 'react-native';
import * as Google from 'expo-auth-session/providers/google';
import axios from 'axios';
import { EXPO_CLIENT_ID, WEB_CLIENT_ID } from '@env'

export default function ({ navigation }) {

    WebBrowser.maybeCompleteAuthSession();

    const [_, response, promptAsync] = Google.useAuthRequest({
        expoClientId: EXPO_CLIENT_ID,
        webClientId: WEB_CLIENT_ID,
    });
      
    React.useEffect(() => {
        console.log("effect response", response)
        if (response?.type === 'success') {
            const { authentication } = response;
            
            console.log("authentication", authentication);

            axios.get('https://www.googleapis.com/oauth2/v2/userinfo',
                {
                    headers: {
                        Authorization: `Bearer ${authentication.accessToken}`
                    }
                }
            )
            .then((axiosResponse) => {
                navigation.navigate("Home", {
                    user: axiosResponse.data
                })
            })
            .catch((err) => {
                console.log("axiosResponseErr", err);
            });
        }
    }, [response]);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Login Screen</Text>
            <Button 
                title="Google+" 
                onPress={() => {
                    console.log("starting google+ login")
                    promptAsync();
                }} 
            />
        </View>
    );
}