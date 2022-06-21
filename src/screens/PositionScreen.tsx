import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

export const PositionScreen = () => {
    return (
        <View style={styles.container}>
            <View style={ styles.cajaVerde}/>
            <View style={ styles.cajaMorada}/>
            <View style={ styles.cajaNaranja}/>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#3B82F6',
        flex: 1,
        //alineacion de elementos hijos
        justifyContent: 'center', //alinea verticalmente al centro
        alignItems: 'center', //alinea horizontalmente al centro
    },

    cajaMorada: {
        backgroundColor: '#9B59B6',
        width: 100,
        height: 100,
        borderWidth: 4,
        borderColor: '#EFF6FF',
        
        position: 'relative', //referente al padre.. 
        top: 10,   //se mueven X pixeles hacia la direccion indicada
    },
    
    cajaNaranja: {
        backgroundColor: '#E67E22',
        width: 100,
        height: 100,
        borderWidth: 4,
        borderColor: '#EFF6FF',
        
        position: 'absolute', //referencia al padre pero desde los bordes
        top: 10
    },

    cajaVerde: {
        backgroundColor: '#10B981',
        // width: 100,
        // height: 100,
        borderWidth: 4,
        borderColor: '#EFF6FF',
        
        //para q ocupe todo el espacio disponible
        // position: 'absolute', 
        // top: 0,
        // bottom: 0,
        // left: 0,
        // right: 0,

        //representa las 5 sentencias anteriores
        ...StyleSheet.absoluteFillObject
    },

    title:{
        fontSize: 24,
    },

    
})