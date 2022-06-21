import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

export const FlexScreen = () => {
    return (
        <View style={style.container} >
            <Text style={style.caja1} >Caja 1</Text>
            <Text style={style.caja2} >Caja 2</Text>
            <Text style={style.caja3} >Caja 3</Text>
        </View>
    )
}



const style= StyleSheet.create({
    container: {
        backgroundColor: '#60A5FA',
        flex: 1,
        justifyContent: 'flex-end',
    },

    /*
    ?Distribuir elementos
    Los nros de flex de elementos hijos se suman y con esa suma se calcula el ancho o largo (1+2+3) = 6
    en este caso 6 representa la cantidad q represetnara al 100%

    ?flexDirection
    Esta propiedad en el elemento padre , ordena de diferente forma los elementos hijos
    *column
    propiedad por defecto, los ordena uno debajo de otro en filas y se intentan expandir lo maximo en cuanto a la COLUMNA
    *row
    los ordena en columnas y se intenta exopandir al maximo en cuanto a su ROW
    *row-reverse
    invierte el orden en cuanto a ubicacion y a orden
    *columns-reverse

    ?Justify
    Alineado horizontal respecto del elemento padre
    Con las variantes space podemos configurar el espaciado entre los elementos
    Dependiendo del FlexDireccion intenta ubicar los elementos hijos

    ?AlignItens
    Controla el como se abarcan los objetos en el espacio que tienen disponible
    Tambien controla la alineacion, siempre en el sentido contrario de Justify

    ?Flexwrap
    ordenar los elementos cuando se desbordan de las dimenciones del padre

    */

    caja1: {
        borderWidth: 2,
        borderColor: '#fff',
        fontSize: 20,
    },
    caja2: {
        borderWidth: 2,
        borderColor: '#fff',
        fontSize: 20,
    },
    caja3: {
        borderWidth: 2,
        borderColor: '#fff',
        fontSize: 20,
    },

})