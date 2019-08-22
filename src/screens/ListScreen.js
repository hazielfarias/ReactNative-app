import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { FlatList } from 'react-native-gesture-handler';

const ListScreen = () => {
    const friends = [
        {name: 'Amigo #1', age:20},
        {name: 'Amigo #2', age:23},
        {name: 'Amigo #3', age:24},
        {name: 'Amigo #4', age:26},
        {name: 'Amigo #5', age:22},
        {name: 'Amigo #6', age:28},
        {name: 'Amigo #7', age:28},
        {name: 'Amigo #8', age:18},
        {name: 'Amigo #9', age:21}
    ]
     


    return <FlatList 
        keyExtractor={(friend) => friend.name}
        data={friends} 
        renderItem={({item})=>{
            return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
        }} 
    />
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
})
export default ListScreen 