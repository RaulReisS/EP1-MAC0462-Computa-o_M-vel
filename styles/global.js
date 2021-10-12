import { StyleSheet } from 'react-native';
import { colors } from './colors'

export const globalStyles = StyleSheet.create({
    container: {
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
    },
    imageFront: {
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center',
        height: 300
    },
    recipeInfo: {
        flex: 1,
        paddingHorizontal: 16,
        paddingBottom: 16,
        top: -45,
        width: '100%'
    },
    typeBox: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 16
    },
    recipeType: {
        flexDirection: 'row',
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: colors.SECONDARY_COLOR,
        padding: 6,
        borderRadius: 12,
        fontSize: 12,
        paddingHorizontal: 12
    },
    recipeTitle: {
        fontWeight: 'bold',
        fontSize: 24,
        //backgroundColor: 'blue',
        marginBottom: 16,
    },
    infoBox: {
        flexDirection: 'row',
        //backgroundColor: 'yellow',
        justifyContent: 'space-around',
        height: 70,
        marginBottom: 4
    },
    infoIcon: {
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: 'blue',
    },
    description: {
        fontSize: 15,
        marginLeft: 2,
        marginBottom: 18,
        textAlign: 'left'
    },
    selection: {
        fontSize: 20
    },
    count: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    countIcon: {
        marginHorizontal: 12,
        backgroundColor: colors.BACKGROUND_COLOR,
        borderRadius: 12,
        padding: 4
    },
    ingredient: {
        //fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 16,
        backgroundColor: colors.PRIMARY_COLOR,
        padding: 10,
        borderRadius: 20,
        color: colors.TEXTWHITE_COLOR
    },
    subtitleBox: {
        flexDirection: 'row',
    },
    list: {

    },
    listItem: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 100
    },
    itemImage: {
        height: 100,
        width: 100,
        borderRadius: 20
    },
    ingredientInfo: {
        width: '100%',
        paddingHorizontal: 4,
        marginTop: 4,
        marginBottom: 18
    },
    ingredientName: {
        fontSize: 18
    },
    ingredientQt: {
        fontSize: 14,
        color: colors.TEXTGRAY_COLOR
    }
})