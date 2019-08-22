import React, {useState} from 'react'
import {View, Text, StyleSheet, TextInput} from 'react-native'

const TextScreen = () =>{
    
    const [name, setName] = useState('')
    const [pass, setPass] = useState('')

    return <View> 
    <TextInput 
        style={styles.input}
        autoCapitalize="sentences"
        autoCorrect={false}
        placeholder="Digite aqui seu nome"
        value={name}
        onChangeText={newValue => setName(newValue)}
    />
    <Text style={styles.text}>Seu nome é: {name} </Text>
    <TextInput 
        style={styles.input}
        autoCapitalize="sentences"
        autoCorrect={false}
        placeholder="Digite aqui sua senha"
        secureTextEntry={true}
        value={pass}
        onChangeText={newValue => setPass(newValue)}
    />
    {pass.length < 4 ? <Text>Opa, algo de errado não está certo com essa senha!</Text> : <Text>Gostei da senha!</Text>}
    </View>
}

const styles = StyleSheet.create({
    input:{
        margin:15,
        borderColor: 'black',
        borderWidth:1,
        height: 35,
        fontSize: 20

    },
    text:{
        fontSize: 30
    }
})
export default TextScreen