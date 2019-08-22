import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'

const BoxScreen = () =>{
    
    return <View style={styles.viewStyle}>
        <Image source={require("../../assets/forest.jpg")} style={styles.imageStyle}/>
        <Text style={styles.textStyle}>Box Screen aah</Text>
        <Text style={styles.textStyle}>Box Screen hsdasd</Text>
        <Text style={styles.textStyle}>Box Scree</Text>
    </View>
}

const styles = StyleSheet.create({
    textStyle:{
        color: 'white',
        borderWidth:3,
        fontWeight:'bold',
        borderColor: 'white',
        flex:1,
        textAlign:"center",
        margin:10,
        textAlignVertical: 'center',
        
    },
    viewStyle:{
        flexDirection:'row',
        justifyContent:'center',
        height:200

    },
    imageStyle:{
        //...StyleSheet.absoluteFill,
        position: 'absolute',
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    
    }

})
export default BoxScreen 