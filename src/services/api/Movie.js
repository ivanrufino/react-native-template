//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
const MyFunctions = {
    get: async (item) => {

        const retorno = await AsyncStorage.getItem(item)
            .then((dados) => {
                const info = JSON.parse(dados);
                return info

            }).catch((error) => {
                console.log('Error', error)
            })
        return retorno;
    },
    insert: async (key, item) => {
        await AsyncStorage.setItem(key, JSON.stringify(item))
            .then(() => {
            })
            .catch((error) => {
                console.log("error", error)
            })

    }
}
export default MyFunctions;
