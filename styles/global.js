import { StyleSheet } from 'react-native';
import { colors } from './colors'

export const globalStyles = StyleSheet.create({
    container: {
        backgroundColor: 'yellow',
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        backgroundColor: colors.BACKGROUND_COLOR
    },
    button: {
        padding: 16,
        backgroundColor: colors.PRIMARY_COLOR,
        borderRadius: 20,
        margin: 16
    },
    buttonText: {
        color: colors.TEXTWHITE_COLOR
    },
    secondaryText: {
        color: colors.TEXTBLACK_COLOR,
        marginBottom: 8,
        marginHorizontal: 16,
        fontSize: 16
    },
    historyBox: {
        backgroundColor: 'blue',
        flexDirection: 'row'
    }
})