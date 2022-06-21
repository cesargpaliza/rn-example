import React from 'react'
import { View, StyleSheet, Dimensions, Text, useWindowDimensions } from 'react-native';

//Extraer dimensiones de pantalla, pero no cambar al rotar el dispositivo
//const { width, height } = Dimensions.get('window')

export const DimensionesScreen = () => {

    const { width,  height } = useWindowDimensions();

    return (
        <View>
            <View style={ styles.container}>
                <View style={ { ...styles.cajaMorada,
                    width: width* 0.20
                }}/>
                <View style={ styles.cajaNaranja}/>
            </View>
            <Text style={styles.title }>Alto: { height } - Ancho: { width}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        height: 150,
    },

    cajaMorada: {
        backgroundColor: '#9B59B6',
        width: '50%',
        height: '50%',
    },
    
    cajaNaranja: {
        backgroundColor: '#E67E22',
        width: '50%',
        height: '50%',
    },
    title:{
        fontSize: 24,
    },

    
})







