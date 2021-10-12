import React, { useState } from 'react'
import { View, Text, TouchableOpacity, ImageBackground, FlatList, Image, ScrollView } from 'react-native';
import { globalStyles } from '../styles/global'
import { LinearGradient } from 'expo-linear-gradient'
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { colors } from '../styles/colors'

const descricao = 'This dessert is very tasty and not difficult to prepare. Also, you can replace strawberries with any other berry you like'
const ingredient = [
        {   name: 'Flour', 
            image: 'https://images.pexels.com/photos/5765/flour-powder-wheat-jar.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            qt: 75,
            unit: 'g',
            key: '0'
        }, 
        {
            name: 'Eggs',
            image: 'https://images.pexels.com/photos/4002087/pexels-photo-4002087.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            qt: 0.5,
            unit: '',
            key: '1'
        },
        {
            name: 'Lemon Juice',
            image: 'https://images.pexels.com/photos/792613/pexels-photo-792613.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            qt: 25,
            unit: 'g',
            key: '2'
        },
        {
            name: 'Strawberry',
            image: 'https://images.pexels.com/photos/1788912/pexels-photo-1788912.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            qt: 33,
            unit: 'g',
            key: '3',
        },
        {
            name: 'Sugar',
            image: 'https://images.unsplash.com/photo-1581268497089-7a975fb491a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80',
            qt: 0.5,
            unit: 'cup',
            key: '4',
        },
        {
            name: 'Mint',
            image: 'https://images.unsplash.com/photo-1574209908880-a2d3caa70f84?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=857&q=80',
            qt: 3.5,
            unit: 'g',
            key: '5',
        },
        {
            name: 'Vanilla',
            image: 'https://images.unsplash.com/photo-1610487512810-b614ad747572?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1164&q=80',
            qt: 0.5,
            unit: 'teaspoon',
            key: '6',
        }
]

export default function ({ navigation, route }) {
    const [qt, setQt] = useState(2)

    const add = () => {
        setQt((prev) => {
            return prev+1
        })
    }

    const sub = () => {
        if(qt > 1) {
            setQt((prev) => {
                return prev-1
            })
        }
    }

    return (
      <View style={globalStyles.container}>
          <ScrollView>
            <ImageBackground
            style={globalStyles.imageFront} 
            resizeMode="cover"
            source={{uri: 'https://images.pexels.com/photos/698854/pexels-photo-698854.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}}>
                <LinearGradient colors={['transparent', 'transparent', '#f8f5f5']} style={globalStyles.imageFront} >
                </LinearGradient>
            </ImageBackground>
        <View style={globalStyles.recipeInfo}>
            <View style={globalStyles.typeBox}>
                <Text style={globalStyles.recipeType}>Desserts</Text>
            </View>
            <Text style={globalStyles.recipeTitle}>Strawberry cake</Text>
            <View style={globalStyles.infoBox}>
                <View style={globalStyles.infoIcon}>
                <FontAwesome name="clock-o" size={24} color={colors.PRIMARY_COLOR} />
                    <Text>50 min</Text>
                </View>
                <View style={globalStyles.infoIcon}>
                <FontAwesome5 name="fire-alt" size={22} color={colors.PRIMARY_COLOR} />
                    <Text>620 kcal</Text>
                </View>
                <View style={globalStyles.infoIcon}>
                <AntDesign name="star" size={24} color={colors.PRIMARY_COLOR} />
                    <Text>4,9</Text>
                </View>
            </View>
            <Text style={globalStyles.description}>{descricao}</Text>
            <View style={{...globalStyles.recipeType, justifyContent: 'space-between',alignItems: 'center', marginBottom: 12}}>
                <Text style={globalStyles.selection}>Servings</Text>
                <View style={globalStyles.count}>
                    <TouchableOpacity onPress={sub} style={globalStyles.countIcon}>
                        <AntDesign name="minus" size={28} color={colors.PRIMARY_COLOR} />
                    </TouchableOpacity>
                    <Text style={{... globalStyles.selection, fontWeight: 'bold'}}>{qt}</Text>
                    <TouchableOpacity onPress={add} style={globalStyles.countIcon}>
                        <AntDesign name="plus" size={26} color={colors.PRIMARY_COLOR} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={globalStyles.subtitleBox}>
                <Text style={globalStyles.ingredient}>Ingredients</Text>
            </View>
            <View>
                <FlatList style={globalStyles.list}
                    columnWrapperStyle={{justifyContent: 'space-between'}}
                    numColumns={3}
                    data={ingredient}
                    renderItem={({ item }) => (
                        <View style={globalStyles.listItem}>
                            <Image style={globalStyles.itemImage} source={{uri: item.image}}/>
                            <View style={globalStyles.ingredientInfo}>
                                <Text style={globalStyles.ingredientName}>{item.name}</Text>
                                <Text style={globalStyles.ingredientQt}>{`${Math.ceil(qt*item.qt)} ${item.unit}`}</Text>
                            </View>
                        </View>
                    )}
                />
            </View>
        </View>
        </ScrollView>
      </View>
    );
}