import React, {useState} from 'react'
import {View, Button, StyleSheet} from 'react-native'
import { FlatList } from 'react-native-gesture-handler';

const ColorScreen = () =>{
    const [colors, setColors] = useState([])
    console.log(colors)
    return <View> 
    
    <Button
    onPress={()=> {
        setColors([...colors, randomRgb()])
  }} 
    title= "Adicionar cor"/>
    
    <FlatList
        keyExtractor={(item) => item}
        data={colors}
        renderItem = {({item}) => {
            return <View style={{height: 200, width: 200, backgroundColor: item }}></View>
        }}
    />
    
    </View>
}

const randomRgb=()=>{
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)
    console.log(`rgb(${red}, ${green}, ${blue})`)
    return `rgb(${red}, ${green}, ${blue})`
}

const styles = StyleSheet.create({

})
export default ColorScreen