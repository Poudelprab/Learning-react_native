import { View, Text,Image } from 'react-native'
import React from 'react'

const ImageComponent = () => {
  return (
    <View>
      <Text>This is  Image Component.</Text>
   <Image source={require('@src/assets/me.jpg')}style={{width:200, height:200}} /> 
    </View>
  )
}

export default ImageComponent