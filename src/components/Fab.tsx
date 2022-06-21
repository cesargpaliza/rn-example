import React from 'react'
import { Text, TouchableOpacity, View, StyleSheet, TouchableNativeFeedback, Platform } from 'react-native';

interface Props {
    title: string,
    position?: 'br' | 'bl',
    onPress: () => void,
}




export const Fab = ({title, onPress, position = 'br' }: Props) => {


    const ios = () => {
        return (
            <View
                style={[                     
                    style.favLocationBotton,
                    (position === 'bl') ? style.left: style.right
                ]}
            >
                <TouchableOpacity
                        activeOpacity={ 0.5 }
                        onPress={ onPress }         
                    >
                        <View style={style.fav} >
                            <Text style={style.favText}
                            >
                                {title}
                            </Text>
                        </View>
                </TouchableOpacity>
            </View>
        )
    }

    const android = () => {
        return (
            <View
                style={[ 
                    style.favLocationBotton,
                    (position === 'bl') ? style.left: style.right
                ]}
            >
                <TouchableNativeFeedback
                        onPress={ onPress }
                        background={TouchableNativeFeedback.Ripple('black', false, 30)}               
                    >
                        <View style={style.fav} >
                            <Text style={style.favText}
                            >
                                {title}
                            </Text>
                        </View>
                </TouchableNativeFeedback>
            </View>
        )
    }

    return (Platform.OS === 'ios') ? ios() : android()
    
}

const style= StyleSheet.create({
    favLocationBotton: {
        position: 'absolute',
        bottom: 25,
        
    },
    right: {
        right: 25,
    },
    left: {
        left: 25,
    },
    fav: {
        backgroundColor: '#44d62c',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },
    favText: {
        color: '#303030',
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',

    }

})