import React, {useState} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import ColorCounter from '../Components/ColorCounter';

const SquareScreen = () =>{
    
    const [red, setRed] = useState(0)
    const [green, setGreen] = useState(0)
    const [blue, setBlue] = useState(0)

    return <View> 
    <ColorCounter 
        onIncrease={()=>setRed(aumentar(red))} 
        onDecrease={()=>setRed(diminuir(red))}
        color="Red"
        /> 
    <ColorCounter 
        onIncrease={()=>setGreen(aumentar(green))} 
        onDecrease={()=>setGreen(diminuir(green))}
        color="Green"/> 
    <ColorCounter 
        onIncrease={()=>setBlue(aumentar(blue))} 
        onDecrease={()=>setBlue(diminuir(blue))}
        color="Blue"/>

    <View 
    style={{
        height: 200, 
        width: 200, 
        backgroundColor:`rgb(${red},${green},${blue})`
        }}
    />

    </View>
}

const aumentar = (cor) =>{
    cor = cor + 20
    if (cor > 255){
        return 255
    }
    else{
        return cor
    }

}
const diminuir = (cor) =>{
    cor = cor - 20
    if (cor < 0){
        return 0
    }
    else{
        return cor
    }

}

const styles = StyleSheet.create({

})
export default SquareScreen