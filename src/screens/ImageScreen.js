import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import ImageDetail from '../Components/ImageDetail';


const ImageScreen = () =>{
    return <View>
        <ImageDetail 
            title="Floresta" 
            imageSource={require("../../assets/forest.jpg")}
            score={10}
            />
        <ImageDetail 
            title="Praia" 
            imageSource={require("../../assets/beach.jpg")}
            score={5}
            />
        <ImageDetail 
            title="Montanha" 
            imageSource={require("../../assets/mountain.jpg")}
            score={9}
            />
    </View>
}

const styles = StyleSheet.create({

})
export default ImageScreen