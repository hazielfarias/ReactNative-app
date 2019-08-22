import React from 'react';
import { Text, StyleSheet, Button, View, TouchableOpacity } from 'react-native';

const HomeScreen = ({navigation}) => {
return <View>
    <Text style={styles.text}>HaziGod</Text>
    
    <Button
    onPress={()=> {
      navigation.navigate('Components')
      }} 
    title= "Vá para os Componentes"/>
    
    <Button
    onPress={()=> {
      navigation.navigate('List')
      }} 
    title= "Vá para a Lista"/>
    
    <Button
    onPress={()=> {
      navigation.navigate('Image')
      }} 
    title= "Vá para as Imagens"/>
    
    <Button
    onPress={()=> {
      navigation.navigate('Counter')
     }} 
    title= "Vá para o Contador"/>
    
    <Button
    onPress={()=> {
      navigation.navigate('Color')
      }} 
    title= "Vá para a Tela de cores"/>
    
    <Button
    onPress={()=> {
      navigation.navigate('Square')
      }} 
    title= "Vá para a Tela do quadrado"/>
    
    <Button
    onPress={()=> {
      navigation.navigate('Text')
     }} 
    title= "Vá para a Tela de texto"/>
  </View>
}

const styles = StyleSheet.create({
  text: {
    fontSize: 50
  }
})

export default HomeScreen
 