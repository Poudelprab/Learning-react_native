import { View,Text,Button,Pressable } from 'react-native'
import React from 'react'

const ButtonComp = () => {
  return (
    <View>
      <Text>ButtonComp</Text>
      <Button title="click here" color="purple" onPress={()=>console.log("Pressed")}/>
       <Button title="tap me"  disabled/>
       <Button title ="Press" color ="green" onPress={()=> alert("Button is pressed😁")}/>

        <Pressable onPress={()=>console.log("Pressed")}>
        <Text style={{color:"teal"}}>press me</Text>
        </Pressable>

        <Pressable onPressIn={()=>console.log("On press In")}>
        <Text style={{color:"coral"}}>press me</Text>
        </Pressable>

        <Pressable onPressOut={()=>console.log("On pressout")}>
        <Text style={{color:"magenta"}}>press me</Text>
        </Pressable>

        <Pressable onLongPress={()=>console.log("Pressed")}>
        <Text style={{color:"crimson"}}>press me</Text>
        </Pressable>

        

     </View>
  )
}

export default ButtonComp