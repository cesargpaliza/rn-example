import React from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useState } from 'react';
import { Fab } from '../components/Fab';

export const ContadorScreen = () => {

    const [ contador, setContador] = useState(1)

  
    return (
        <View style={style.container}>
            <Text style={style.title}
            >
              Contador: {contador}
            </Text>
            <Text style={style.subtitle}
            >
              CSR2022
            </Text>
            
            <Fab
                title="-1"
                position="bl"
                onPress={ () => setContador( contador - 1) }
            />
            <Fab
                title="+1"
                onPress={ () => setContador( contador + 1) }
            />
            {/* <TouchableOpacity               
                onPress={ () => setContador( contador - 1) }
                style={style.favLocationBottonLeft}
            >
                <View style={style.fav} >
                    <Text style={style.favText}
                    >-1</Text>
                </View>
            </TouchableOpacity>*/}
          </View> 
    )
}


const style= StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#303030',
    },
    title: {
        fontSize: 45,
        color: '#fff',
        textAlign: 'center'
    },
    subtitle: {
        fontSize: 20,
        color: '#44d62c',
        textAlign: 'center'
      },
    favLocationBottonRight: {
        position: 'absolute',
        bottom: 25,
        right: 25,
    },
    favLocationBottonLeft: {
        position: 'absolute',
        bottom: 25,
        left: 25,
    },
    fav: {
        backgroundColor: '#44d62c',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center',
    },
    favText: {
        color: '#303030',
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',

    }

})
