import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { colors } from '../styles/colors'

export default function WeatherInfo({currentWeather}) {
    const {
        main: {temp},
        weather: [details],
        name
    } = currentWeather

    const { icon, main, description } = details

    const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`

    return (
        <View style={styles.weatherInfo}>
                <Image style={styles.weatherIcon} source={{uri: iconUrl}}/>
            <View style={styles.Item}>
                <Text style={styles.textPrimary}>{temp} ºC</Text>
                <Text style={styles.weatherDescription}>{description}</Text>
                <Text style={styles.textSecondary}>{name}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    weatherInfo: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        //padding: 16
        backgroundColor: colors.PRIMARY_COLOR,
        borderRadius: 20,
        margin: 16
    },
    weatherDescription: {
        textTransform: 'capitalize',
        color: colors.TEXTWHITE_COLOR,
        fontSize: 25,
    },
    weatherIcon: {
        width: 100,
        height: 100,
        flex: 1
    },
    textPrimary: {
        fontSize: 35,
        color: colors.TEXTWHITE_COLOR,
        marginTop: 6
    },
    textSecondary: {
        fontSize: 20,
        color: colors.TEXTWHITE_COLOR,
        fontWeight: '500',
        marginTop: 6
    },
    Item : {
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
        padding: 8
    },
    subItem: {
        padding: 16
    }

})