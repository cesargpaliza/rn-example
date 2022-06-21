import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

export const BoxObjectModelScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hola Perro</Text>
        </View>
    )
}

const styles =  StyleSheet.create({
    title: {
        fontSize: 20,
        //backgroundColor: 'red',
        borderWidth: 5,
        padding: 10,
        margin: 10
    },
    container: {
        backgroundColor: 'red',
        // para que funcione este flex, su padre debe abarcar la totalidad de la plantalla
        flex: 1
    }
})