import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'

const ColorCounter = ({color, onIncrease, onDecrease}) =>{
    
    return <View> 
    <Text>{color}</Text>
    <Button
        title={`Aumenta ${color}`}
        onPress={()=> onIncrease()}
    />
    <Button
        title={`Diminui ${color}`}
        onPress={()=> onDecrease()}
    />
    </View>
}

const styles = StyleSheet.create({

})
export default ColorCounter