import React, {useState} from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'

const CounterScreen = () =>{
    const [counter, setCounter] = useState(0)

    return <View> 
        <Button
            onPress={()=> {
                setCounter(counter+1)
                }} 
            title= "Aumentar"/>
        <Button
            onPress={()=> {
                setCounter(counter-1)
                }} 
            title= "Diminuir"/>

        <Text>Contagem atual: {counter}</Text>   
    </View>
}

const styles = StyleSheet.create({

})
export default CounterScreen 