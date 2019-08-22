import React from 'react';
import { Text, StyleSheet, Button, View, ScrollView } from 'react-native';

const HomeScreen = ({navigation}) => {
return <ScrollView>
<View style={styles.viewStyle}>
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

<Button
    onPress={()=> {
      navigation.navigate('Box')
     }} 
    title= "Vá para a Tela da Caixa"/>
  </View>
  </ScrollView> 
}

const styles = StyleSheet.create({
  text: {
    fontSize: 50
  },
  viewStyle:{
    justifyContent: 'space-between',
    height: 600,
    margin: 10
  }
})

export default HomeScreen
 