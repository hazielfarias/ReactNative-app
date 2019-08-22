import React from 'react'
import {Text, StyleSheet, View} from 'react-native'

const ComponentsScreen = () => {
    const nome = 'Haziel'
    
    return (<View>
    <Text style={styles.textStyle}>Tela de Componentes</Text>
    <Text style={styles.subHeaderStyle}>Meu nome é {nome}</Text>
    </View>
    )
}


const styles = StyleSheet.create(
    {
        textStyle:{
            fontSize:45,
            color: 'red'
        },
        subHeaderStyle:{
            fontSize:20,
            color: 'blue'
        }
    }
)

export default ComponentsScreen; 